# syntax=docker/dockerfile:1.4

# Use nodejs version
ARG NODE_VERSION=20.10.0

# use the official node.js image
FROM node:${NODE_VERSION}-alpine as development

# Environment variable for the container
ENV NODE_ENV production

# set the working directory in the container
WORKDIR /usr/src/app

# install dependencies
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app

EXPOSE 3000


# Run command
CMD [ "npm", "run", "dev" ]

# dev Env
FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "run", "dev" ]