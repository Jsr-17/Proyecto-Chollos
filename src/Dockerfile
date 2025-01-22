# Usa una imagen oficial de PHP con Apache
FROM php:8.1-apache

# Instala las extensiones necesarias para MySQL y otros componentes
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copia tu código de la aplicación PHP al contenedor
COPY . /var/www/html/

# Exponemos el puerto 80 para acceder a la aplicación web
EXPOSE 80
