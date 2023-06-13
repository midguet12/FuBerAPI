FROM node:18

# Create app directory
WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "/src/index.js" ]