FROM node:alpine

ADD s.mjs /app/s.mjs
RUN apk add --update nano
RUN npm install --global nodemon
RUN echo '{"execMap": {"mjs": "node --experimental-modules"}}' > '/app/nodemon.json'
WORKDIR /app

EXPOSE 3333

CMD nodemon s.mjs
