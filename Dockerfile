FROM node:latest

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install

# Copy the rest of the code
COPY . .

ENTRYPOINT ["/usr/local/bin/npm", "run"]
