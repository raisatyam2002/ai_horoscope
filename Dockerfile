FROM node:20.12.0-alpine3.19

WORKDIR app/ai_horoscope

copy package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run db:generate

RUN npm run build

cmd  ["npm","run","start"]