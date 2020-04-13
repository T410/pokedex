FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add http-server
WORKDIR /app
COPY --from=builder /app/build .
CMD ["http-server", "-p", "80", "index.html"]