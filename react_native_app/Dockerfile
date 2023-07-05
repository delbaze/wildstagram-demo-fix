# pull base image
FROM node:lts

RUN mkdir /react_native_app
WORKDIR /react_native_app


COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["start"]