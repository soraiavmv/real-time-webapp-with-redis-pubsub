FROM node:16-alpine3.14

WORKDIR /src

COPY package.json ./

COPY . .

RUN yarn

EXPOSE 9000

CMD ["yarn", "dev"]