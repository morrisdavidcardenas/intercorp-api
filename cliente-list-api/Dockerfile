FROM node:10-alpine
ARG environment
ENV environment=${environment}
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["sh", "-c", "npm run start:${environment}"]
