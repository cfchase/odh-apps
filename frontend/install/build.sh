#!/usr/bin/env bash
printf "\n\n######## frontend build ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

IMAGE_REPOSITORY=${FRONTEND_IMAGE_REPOSITORY:-quay.io/cfchase/odh-apps-frontend:latest}
SOURCE_REPOSITORY_URL=${SOURCE_REPOSITORY_URL:-git@github.com:cfchase/odh-apps.git}
SOURCE_REPOSITORY_REF=${SOURCE_REPOSITORY_REF:-master}

echo "Building ${IMAGE_REPOSITORY}"

cd ${DIR}/..
rm -rf build
yarn install
yarn build

s2i build ./build centos/nginx-114-centos7 ${IMAGE_REPOSITORY}
