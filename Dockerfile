# Use nodejs version
ARG NODE_VERSION=20.10.0

# use the official node.js image
FROM node:${NODE_VERSION}-alpine

# set the working directory in the container
WORKDIR /usr/src/app

# install dependencies
COPY package.json ./
RUN npm install

COPY . .

# Environment variable for the container
ENV NODE_ENV production

EXPOSE 3000


# Run command
CMD [ "npm", "start" ]
