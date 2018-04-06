# edc-webmail-showcase

Web application example for edc integration

## edc Version

Current edc-webmail-showcase release targets edc v2.2.0

## Requirements

* npm (https://docs.npmjs.com/getting-started/installing-node)

* Installed server hosting documentation's exported data. End point keys should be : 
  * key/subkey values for the account : 'fr.techad.edc.showcase.mailreader', 'leftmenu.account'
  * key/subkey values for the email-tab : 'fr.techad.edc.showcase.mailreader', 'email.tab'
  
* edc-help-ng2 running

## Building:

  * With npm : 
  
```bash
$ npm build
```
  * With yarn 
  
```bash
$ yarn build
```

## Launching: 

#### Install dependencies : 

* With npm : 
  
```bash
$ npm install
```
* With yarn :
  
```bash
$ yarn install
```

#### Run the project : 

* With npm : 
  
```bash
$ npm start
```

* With yarn :
  
```bash
$ yarn start
```

* If you want to run the prod version : 
 
```bash
$ npm start -prod --aot
```

#### The application should be running at http://localhost:4201

## License
MIT [TECH'advantage](mailto:contact@tech-advantage.com)
