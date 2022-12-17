const db = require('./server');
const cTable = require('console.table');


db.query('SELECT * FROM departments', (err, result) => {
    if (err) {
        console.log (err);
    }
    console.log(result)
})