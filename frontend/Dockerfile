FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build --production
RUN npm install -g serve
EXPOSE 5000
CMD ["serve","-l","5000","-s","build"]
