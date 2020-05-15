#!/usr/bin/env bash
printf "\n\n######## admin-ui dev ########\n"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

ENV_FILE=${DIR}/../../.env.dev
if [ -f "${ENV_FILE}" ]; then
  source ${ENV_FILE}
  for ENV_VAR in $(sed 's/=.*//' ${ENV_FILE}); do export "${ENV_VAR}"; done
fi

FRONTEND_PORT=${FRONTEND_PORT:-3000}

cd ${DIR}/..
pwd

yarn install
PORT=${FRONTEND_PORT} yarn start