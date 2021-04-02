FROM node:12.22.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @nestjs/cli
RUN npm install
RUN npm run build

CMD [ "npm", "run", "start:prod" ]