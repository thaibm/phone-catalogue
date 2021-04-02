# ---- Base Node ----
FROM node:12.22.0 AS base
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#
# ---- Dependencies ----
FROM base AS dependencies
RUN npm install -g --silent react-scripts
COPY package.json /usr/src/app/package.json
RUN npm install --silent

#
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS test
COPY . .
RUN npm run lint

#
# ---- Build ----
# run linters, setup and tests
FROM test AS build
COPY . .
RUN npm run lint
RUN npm run build

#
# ---- Release ----
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 