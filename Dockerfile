FROM node:17-alpine as BUILDER

WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn

COPY . .

ARG project

RUN yarn build $project

FROM node:17-alpine

WORKDIR /dist

ARG project
COPY --from=BUILDER /build/dist/apps/$project .
COPY package.json yarn.lock ./
RUN yarn

CMD ["node", "main.js"]