# pull base image
FROM node:lts

RUN mkdir /react_native_app
WORKDIR /react_native_app


COPY ./react_native_app/package.json ./react_native_app/package-lock.json ./
RUN npm install
COPY ./react_native_app .

ENTRYPOINT ["npm", "run"]
CMD ["start"]