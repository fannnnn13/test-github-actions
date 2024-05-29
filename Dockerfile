# Use an official Node.js runtime as the base image
FROM node:20.12.2

RUN mkdir -p /opt/app

# Set the working directory in the container
WORKDIR /opt/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (if needed)
EXPOSE 8080

# Define the command to run your application
CMD [ "npm", "start" ]