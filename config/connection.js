const mysql = require('mysql2/promise');
require('dotenv').config();

// const connection = mysql.createConnection(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

const connection = mysql.createConnection(
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