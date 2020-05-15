#!/usr/bin/env bash
printf "\n\n######## odh-apps frontend push ########\n"

IMAGE_REPOSITORY=${FRONTEND_IMAGE_REPOSITORY:-quay.io/cfchase/odh-apps-frontend:latest}

echo "Pushing ${IMAGE_REPOSITORY}"
docker push ${IMAGE_REPOSITORY}



