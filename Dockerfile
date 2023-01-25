FROM nginx:alpine

COPY nginx_linux.conf /etc/nginx/nginx.conf 
COPY ./build/ /var/www/ratnafin
COPY ./.keys/* /var/www/ratnafin
EXPOSE 3000

