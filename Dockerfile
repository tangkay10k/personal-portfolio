# Stage 1: build the React frontend
FROM node:18-alpine AS frontend
WORKDIR /app
COPY portfolio-v2/package*.json ./portfolio-v2/
RUN npm install --prefix portfolio-v2
COPY portfolio-v2/ ./portfolio-v2/
RUN npm run build --prefix portfolio-v2

# Stage 2: build the Express backend
FROM node:18-alpine AS backend
WORKDIR /app

# install only prod deps
COPY server/package*.json ./server/
RUN npm install --prefix server --production
COPY server/ ./server/

# copy the build into server/public
COPY --from=frontend /app/portfolio-v2/dist ./server/public

WORKDIR /app/server
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
