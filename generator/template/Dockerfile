# step1: Build static website
FROM node:6-alpine as builder
RUN apk update && apk add --no-cache make git

# Create app directory manually so it's owned by node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY COPY --chown=node:node package.json ./
RUN npm install

# Copy project files into docker image for deployments, this is overwritten by local dev volumes.
COPY --chown=node:node . .


#step-2: copy static files to nginx image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# From 'builder' copy website to default nginx public folder
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off" ]

