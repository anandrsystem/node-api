const config = require('./server/config/env_config/config');
const db = require('./server/config/db');
const server = require('./server/config/app')();

//create the basic server setup 
server.create(config, db);

//start the server
server.start();
