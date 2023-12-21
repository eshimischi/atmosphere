FROM dunglas/frankenphp

ARG user
ARG uid
ARG TZ

ENV user $user
ENV uid $uid
ENV TZ $TZ
# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    cron \
    default-mysql-client
# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/* && \
# Install PHP extensions
docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd && \
#install mailparse
pecl install mailparse && \
echo extension=mailparse.so > /usr/local/etc/php/conf.d/mailparse.ini && \
echo "max_execution_time=900" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
# RUN useradd -G www-data,root,crontab -u $uid -d /home/$user $user
# RUN mkdir -p /home/$user/.composer && \
#     chown -R $user:$user /home/$user && \
#     chown -R $user:$user /var/www && \
#     chown -R www-data:www-data /var/www


# USER $user
