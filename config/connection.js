const mysql = require('mysql2');

let connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'emmaEMMA',
    database: 'business_db'
  },
  console.log(`Connected to the database.`)
);

module.exports = connection;