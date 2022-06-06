FROM node:16-alpine3.14

WORKDIR /src

COPY package.json ./

COPY . .

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
   
RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]