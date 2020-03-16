FROM node:10
RUN mkdir /gan
# Create app directory
WORKDIR /gan

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD . /gan/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source


CMD [ "node", "/gan/download.js"  ]
