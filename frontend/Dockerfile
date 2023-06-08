FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build --production
RUN npm install -g serve
EXPOSE 5000
CMD serve -s build
# CMD ["serve","-l","5000","-s","build"]
# EXPOSE 3000
# CMD ["npm","start"]
# EXPOSE 80
