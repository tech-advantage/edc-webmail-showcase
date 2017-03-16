# edc-webmail-showcase
Example of web application for edc integration

#Requirements
- npm (https://docs.npmjs.com/getting-started/installing-node)

- Installed server hosting documentation's exported data

- edc-help-ng2 running

- nginx (or any other http proxy server) installed and set up for redirecting 
'/email' to port 8081 : 

       add following rule in file /etc/nginx/sites_available/default: 
       
        location /email {
                proxy_pass      http://127.0.0.1:4201/;
        }
        
#Launching: 
with your favorite shell : 
1) install dependencies : npm install
2) npm start
