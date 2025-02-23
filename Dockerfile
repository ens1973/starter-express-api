FROM node:16.16.0-alpine

EXPOSE 3000
EXPOSE 5173
ENV NODE_ENV development
#ARG API_URL
#ENV VITE_API_URL $API_URL

RUN mkdir /frontend
WORKDIR /frontend

RUN npm install -g pnpm

COPY package*.json pnpm*.yaml /frontend/

# RUN npm install
RUN pnpm install

COPY . .

#RUN pnpm run build
#CMD sleep 1000

# CMD npm run dev
CMD pnpm run dev


