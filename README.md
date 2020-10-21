# edc-webmail-showcase

Web application example for edc integration

## edc Version

Current edc-webmail-showcase release is compatible with edc v3.0+

## Requirements

* npm (https://docs.npmjs.com/getting-started/installing-node)

* Installed server hosting documentation's exported data. End point keys should be : 
  * key/subkey values for the account : 'fr.techad.edc.showcase.mailreader', 'leftmenu.account'
  * key/subkey values for the email-tab : 'fr.techad.edc.showcase.mailreader', 'email.tab'
  
* [edc-help-viewer](https://github.com/tech-advantage/edc-help-viewer) running

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

#### The application should be running at http://localhost:4201/email

## License
MIT [TECH'advantage](mailto:contact@tech-advantage.com)
