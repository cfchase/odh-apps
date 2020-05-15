#!/usr/bin/env bash
printf "\n\n######## deploying frontend to OpensShift ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

PROJECT=${PROJECT:-odh-apps}

[[ ! -z "${FRONTEND_IMAGE_REPOSITORY}" ]] && { ARGS="${ARGS} -p IMAGE_REPOSITORY=${FRONTEND_IMAGE_REPOSITORY}"; }
[[ ! -z "${FRONTEND_REPLICAS}" ]] && { ARGS="${ARGS} -p REPLICAS=${FRONTEND_REPLICAS}"; }
[[ ! -z "${ROUTE_NAME}" ]] && { ARGS="${ARGS} -p ROUTE_NAME=${ROUTE_NAME}"; }


oc project ${PROJECT} 2> /dev/null || oc new-project ${PROJECT}
echo "Deploying frontend to project ${PROJECT}"

oc process -f "${DIR}/openshift.yml" ${ARGS} | oc create -f -

echo "${ARGS}"