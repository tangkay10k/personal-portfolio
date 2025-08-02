# Stage 1: build the React frontend
FROM node:18-alpine AS frontend

# set working directory
WORKDIR /app

# only copy the deps manifest first for caching
COPY portfolio-v2/package*.json ./portfolio-v2/

# install dependencies
RUN npm install --prefix portfolio-v2

# copy the rest of the frontend code & build
COPY portfolio-v2/ ./portfolio-v2/
RUN npm run build --prefix portfolio-v2


# Stage 2: build the Express backend
FROM node:18-alpine AS backend

WORKDIR /app

# copy server package files & install (production only)
COPY server/package*.json ./server/
RUN npm install --prefix server --production

# copy server source
COPY server/ ./server/

# copy the React build into the server's public dir
# (adjust path if your Express serves static from another folder)
COPY --from=frontend /app/portfolio-v2/dist ./server/public

# set working dir to the server
WORKDIR /app/server

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
