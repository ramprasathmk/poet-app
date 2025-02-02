# syntax=docker/dockerfile:1.4

ARG NODE_VERSION=18

################################################################################
# Base image for all stages  
FROM node:${NODE_VERSION}-alpine AS base

# Set the working directory
WORKDIR /usr/src/app

# Install essential build tools
# TODO: Uncomment the command if you really need these dependancies
# RUN apk add --no-cache python3 make g++ 

################################################################################
# Dependencies stage
FROM base AS deps

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json* ./

# Install only production dependencies for optimized builds
RUN npm ci --only=production

################################################################################
# Build stage (if needed for assets or complex builds)
FROM base AS build

# Copy all source files for building
COPY . .

# Install full dependencies for building (including devDependencies)
RUN npm ci

# ? Example build step (if your project has one)
# RUN npm run build

################################################################################
# Production stage (final)
FROM base AS final

# Set environment to production
ENV NODE_ENV=production

# * Switch to non-root user for security
USER node

# * Copy only essential files from previous stages
COPY package.json . 
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app . 

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]