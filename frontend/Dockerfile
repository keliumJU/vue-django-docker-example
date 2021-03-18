FROM  node:15.11.0-alpine3.10 as build-stage
WORKDIR  /src/app/
COPY . /src/app/
COPY package.json ./
RUN npm install
COPY . . 
RUN npm run build
#EXPOSE 8080
#CMD [ "npm", "run", "serve" ]

#Etapa de produccion con nginx
FROM nginx:1.18-alpine as production-stage
COPY --from=build-stage /src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]