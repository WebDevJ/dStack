const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration.js');
const pool = new Pool(databaseConfiguration);

module.exports =pool;

//      check db connection with below command:
//      ./node_modules/nodemon/bin/nodemon.js databasePool.js

pool.query('SELECT * FROM generation', (error, response )=>{
    console.log("inside db connection")

    if (error) return console.log('error', error);
    console.log('response.rows', response.rows);
    pool.end()
}); 