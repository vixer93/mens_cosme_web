FROM node:12.16.1-alpine

WORKDIR /mens_cosme_web

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g vue-cli

ENV HOST 0.0.0.0
EXPOSE 3000