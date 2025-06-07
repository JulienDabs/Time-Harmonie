FROM node:23-alpine


WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./



# Try with verbose logging to see what's happening
RUN npm install --verbose

RUN npm install -g prisma

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application  
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start:dev"]