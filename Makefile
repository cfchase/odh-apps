ENV_FILE := .env
ifneq ("$(wildcard $(ENV_FILE))","")
include ${ENV_FILE}
export $(shell sed 's/=.*//' ${ENV_FILE})
endif

##################################

# DEV - run apps locally for development

.PHONY: dev-frontend
dev-frontend:
	./frontend/install/dev.sh

.PHONY: dev
dev: dev-frontend

##################################

# BUILD - build images locally using s2i

.PHONY: build-frontend
build-frontend:
	./frontend/install/build.sh

.PHONY: build
build: build-frontend

##################################

# PUSH - push images to repository

.PHONY: push-frontend
push-frontend:
	./frontend/install/push.sh

.PHONY: push
push: push-frontend

##################################

.PHONY: openshift-login
openshift-login:
ifdef OC_TOKEN
	$(info **** Using OC_TOKEN for login ****)
	oc login ${OC_URL} --token=${OC_TOKEN}
else
	$(info **** Using OC_USER and OC_PASSWORD for login ****)
	oc login ${OC_URL} -u ${OC_USER} -p ${OC_PASSWORD} --insecure-skip-tls-verify=true
endif

##################################

# OC-DEPLOY - deploy

.PHONY: openshift-deploy-frontend
openshift-deploy-frontend: openshift-login
	./frontend/install/openshift/deploy.sh

.PHONY: openshift-deploy
openshift-deploy: openshift-login openshift-deploy-frontend

##################################

# OC-UNDEPLOY - undeploy

.PHONY: openshift-undeploy-frontend
openshift-undeploy-frontend: openshift-login
	./frontend/install/openshift/undeploy.sh

.PHONY: openshift-undeploy
openshift-undeploy: openshift-login openshift-undeploy-frontend

##################################
