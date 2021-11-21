FROM node:16-alpine AS builder

WORKDIR /home/node/app/

COPY . .

#RUN npm install
#RUN npm run build

# In case of yarn:
RUN yarn install
RUN yarn run build

FROM nginx:stable-alpine

COPY ./.nginx/templates/* /etc/nginx/templates/

COPY --from=builder /home/node/app/build /usr/share/nginx/html