FROM imbios/bun-node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and bun.lockb files to the working directory
COPY package.json bun.lockb ./

# Install the app dependencies
RUN bun install

# Copy the rest of the app files to the working directory
COPY . .

# Build the Remix app
RUN bun run build

# Start the app
CMD ["bun", "run", "start"]