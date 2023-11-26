FROM node:14 as build-stage

# specify working directory.
WORKDIR /app

# Copy all dependencies to container to install.
COPY package*.json ./
RUN npm install

# Copy application source code.
COPY . .

# Create a production build
RUN npm run build

# Use Ngix image to serve
FROM nginx:stable as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Specify port
EXPOSE 80


