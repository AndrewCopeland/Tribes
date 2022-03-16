<hr />
<div align="center">
    <img src="public/static/img/tribe.png" alt="Logo" width='150px' height='auto'/>
</div>
<hr />

# Paw Tribes

The perfect tool for Paw tribes lists and network statistics.

## What is Paw?

PAW is a animal themed digital currency. More information is available over on the official [Paw repository](https://github.com/paw-digital/paw-node).

[![Twitter Follow](https://img.shields.io/twitter/follow/PAW_digital?style=social)](https://twitter.com/intent/follow?screen_name=PAW_digital)
[![Discord](https://img.shields.io/badge/discord-join%20chat-orange.svg?logo=discord&color=7289DA)](https://discord.gg/DjXn6bb3aE)

| Link | Description |
| :----- | :------ |
[PAW.digital](https://paw.digital) | PAW digital currency Homepage

## Prerequisites

- Webserver like nginx as a reverse proxy
- MongoDB
- Nano Node with RPC enabled
- Node.js
- PM2 `npm install pm2 -g`

## Installation

Clone the repository to your server and install the dependencies with `npm i`.

After that copy the `ecosystem.config.sample.js` as `ecosystem.config.js` and edit the environment variables accordingly.

To start up the application execute `pm2 start ecosystem.config.js`.

It is recommended to put the application behind a proper webserver like nginx, a configuration for that could look like this:

```nginx
server {
        listen 80;
        listen [::]:80;

        server_name tribes.paw.digital;

        // location to your PawTribes
        location / {
                proxy_pass http://127.0.0.1:4000;
        }

        // location to your PawAccept instance
        location /payment/ {
                rewrite ^/payment(/.*)$ $1 break;
                proxy_pass         http://127.0.0.1:5000;
        }
}
```



## Installation Guide On Ubuntu 20.04

### Installing mongo
```bash
# If you have mongo 3.6 already installed and want to keep it you can skip this.
# Careful purge command may erase more than what is wanted. Not recommended to use on a server that already uses or implements mongo in any way.
# sudo apt-get purge mongo*

sudo wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt update
sudo apt install mongodb-org
sudo systemctl start mongod.service
```

### Create config
Copy ecosystem.config.sample.js to ecosystem.config.js and update the configuration data

### Install prerequisites and start
```bash
npm install
npm i pm2 -g
pm2 start ecosystem.config.js
```

To see logs pm2 ls and pm2 logs 0 ( or whatever else the id is )


## Open Source Licenses

This product includes GeoLite2 data created by MaxMind, available from <a href="http://www.maxmind.com">http://www.maxmind.com</a>.

## Acknowledgements

Special thanks to the following!

- [My Nano Ninja](https://github.com/BitDesert/MyNanoNinja) - The original one 
