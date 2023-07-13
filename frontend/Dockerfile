FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build --production
RUN npm install -g serve
EXPOSE 8080
CMD ["serve","-l","8080","-s","build"]
