const db = require('./config/connection');
require('console.table');
const inquirer = require('inquirer');
// const db = require('./queries');

function mainMenu() {



    inquirer
        .prompt([
            {
                type: 'list',
                name: 'main',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
            },
        ])

        .then(choice => {
            switch (choice.main) {
                case 'View all departments':
                    // db query to view departments table
                    viewAllDepts();
                    break;
                case 'View all roles':
                    // db query to view roles table
                    viewAllRoles();
                    break;
                case 'View all employees':
                    // db query to view employee table
                    viewAllEmps();
                    break;
                case 'Add a department':
                    // prompt to enter a department name
                    // db query to add department name to departments table
                    // return to main menu
                    addDept();
                    break;
                case 'Add a role':
                    // prompt to enter a role title, salary in decimal format (no dollar sign), and department id
                    // db query to add new role to roles table
                    // return to main menu
                    addRole();
                    break;
                case 'Add an employee':
                    // prompt to enter employee first name, last name, role id, and manager id (if they have a manager)
                    // db query to add new employee to employees table
                    // return to main menu
                    addEmployee();
                    break;
                case 'Update employee role':
                    // db query to pull up all employees by last name
                    // prompt to choose employee from list
                    // db query to pull up employee info
                    // prompt to enter updated employee role
                    // db query to change role in table
                    // return to main menu
                    break;
            }
        });

}

mainMenu();

function viewAllDepts() {
    db.query('SELECT * FROM department', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('DEPARMENTS');
        console.table(result);
        mainMenu();
    });
};

function viewAllRoles() {
    db.query('SELECT * FROM role', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('ROLES');
        console.table(result);
        mainMenu();
    });
};

function viewAllEmps() {
    db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('EMPLOYEES')
        console.table(result);
        mainMenu();
    });
};

function addDept() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please enter the name of the department you would like to add:'
            }
        ])
        .then(function(answer) {
            const sql = `INSERT INTO department (name) VALUES (?)`;
            db.query(sql, [answer.name], (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
                viewAllDepts();
            })
        })
};

function addRole() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Please enter the title of the role you would like to add:'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Please enter the salary for this role:'
            },
            {
                name: 'department',
                type: 'input',
                message: 'Please enter the department id for this role:'
            }
        ])
        .then(function(answer) {
            const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
            db.query(sql, [answer.name, answer.salary, answer.department], (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
                viewAllRoles();
            })
        })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'Please enter employee first name:'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'Please enter employee last name:'
            },
            {
                name: 'role',
                type: 'input',
                message: 'Please enter the id of the employee role:'
            },
            {
                name: 'manager',
                type: 'input',
                message: 'Please enter the id of the manager employee reports to:'
            }
        ])
        .then(function(answer) {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            db.query(sql, [answer.firstName, answer.lastName, answer.role, answer.manager], (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
                viewAllEmps();
            })
        })
};

function editEmployee() {
    // db query to get all employee last names
    // inquirer prompt with employees as options
    // inquirer prompt to enter new role id
    // db query to select employee and replace role id
    // return to main menu

    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'Please enter employee first name:'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'Please enter employee last name:'
            },
            {
                name: 'role',
                type: 'input',
                message: 'Please enter the id of the employee role:'
            },
            {
                name: 'manager',
                type: 'input',
                message: 'Please enter the id of the manager employee reports to:'
            }
        ])
        .then(function(answer) {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            db.query(sql, [answer.firstName, answer.lastName, answer.role, answer.manager], (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
                viewAllEmps();
            })
        })
};