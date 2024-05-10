# Use an official Node runtime as a parent image, aligning with your Node version
FROM node:18.12.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Install any dependencies
RUN yarn

# Copy the rest of your project
COPY . .

# Build your Gatsby site
RUN npm run build

# Expose the port Gatsby serves on
EXPOSE 9000

# Serve the site with Gatsby
CMD ["gatsby", "serve", "-H", "0.0.0.0"]
