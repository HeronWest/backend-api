FROM node:8.11.3-alpine

WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install --production

ADD . /app
ADD .env /app/.env

EXPOSE 3000
CMD ["npm", "run", "start"]