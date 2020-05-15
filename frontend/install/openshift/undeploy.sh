#!/usr/bin/env bash
printf "\n\n######## admin-ui undeploy ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

PROJECT=${PROJECT:-odh-apps}

oc project ${PROJECT}
echo "Undeploying from project ${PROJECT}"

oc process -f ${DIR}/openshift.yml | oc delete -f -
