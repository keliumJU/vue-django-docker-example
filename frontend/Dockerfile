FROM  node:15.11.0-alpine3.10
WORKDIR  /src/app/
COPY . /src/app/
COPY package.json ./
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "serve" ]