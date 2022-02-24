FROM node:alpine
WORKDIR /app

# COPY the package.json file, update any deps and install them
COPY package.json .
RUN npm update
RUN npm install
RUN npm install --global gatsby-cli

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . .

CMD [ "npm", "run", "start" ]