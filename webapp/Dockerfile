FROM node:16-alpine3.14

WORKDIR /src

COPY package.json ./

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]