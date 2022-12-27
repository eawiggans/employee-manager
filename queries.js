const connection = require('./config/connection');



class DB {

    constructor(connection){
        this.connection = connection;
    }

    viewAllDepts() {
        return this.connection.query('SELECT * FROM department', (error, response) => {
            if (error) throw error;
            console.log(response);
        });
        // return this.connection.promise().query('SELECT * FROM department')
        // .then((result) => {
        //     console.log(result);
        // })
        // .catch(console.log)
        // .then( () => connection.end());
    }
    };

    // viewAllEmp() {
    //     return this.connection.promise().query('SELECT * FROM employee', (err, result) => {
    //         if (err) {
    //             console.log (err);
    //         }
    //         console.log(result)
    //     })
    // }


// function viewAllDepts() {
//     return db.query('SELECT * FROM department', (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log(result)
// })
// };

// function viewAllRoles() {
//     db.query('SELECT * FROM role', (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log(result)
// })
// };

// function viewAllEmployees() {
//     db.query('SELECT * FROM employee', (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log(result)
// })
// };


// function addDepartment() {
//     db.query('INSERT INTO department (name) VALUES (USER ENTRY HERE)', (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log('New department added')
// })
// };

// function addRole() {
//     db.query('INSERT INTO role (name, salary, department) VALUES ?', [], (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log('New role added')
// })
// };

// function addEmployee() {
//     db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?', [], (err, result) => {
//     if (err) {
//         console.log (err);
//     }
//     console.log('New employee added')
// })
// };

module.exports = new DB(connection);