FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm i
RUN npm i body-parser -g
RUN npm i cookie-parser -g
RUN npm i debug -g
RUN npm i dotenv -g
RUN npm i express -g
RUN npm i fuel-rest -g
RUN npm i helmet -g
RUN npm i http-errors -g
RUN npm i jsonwebtoken -g
RUN npm i morgan -g
RUN npm i pug -g
RUN npm i uuid -g
RUN npm i winston -g

USER root

RUN chown -R node:node ./node_modules

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]