FROM node:12.22.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @nestjs/cli

COPY ./package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app/
RUN npm run build

CMD [ "npm", "run", "start:prod" ]