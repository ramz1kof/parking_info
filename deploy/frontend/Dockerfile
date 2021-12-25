FROM node:16-alpine AS build-step

WORKDIR /app

RUN apk --no-cache add git

RUN git clone -b dev https://github.com/ramz1kof/parking_info.git
WORKDIR /app/parking_info

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-step /app/parking_info/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
