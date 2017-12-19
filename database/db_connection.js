const {Pool} = require('pg');
require('env2')('config.env');

let DATABASE_URL = process.env.DATABASE_URL;
if(process.env.NODE_ENV === 'test'){
  DATABASE_URL = process.env.TEST_DATABASE_URL;
}

if(!process.env.DATABASE_URL)
 throw new Error('Enviroment variable DATABASE_URL  must be sent');

 const pool = new Pool ({
   connectionString: process.env.DATABASE_URL
 });

 module.exports = pool;
