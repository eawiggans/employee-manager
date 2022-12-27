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
                    break;
                case 'Add a role':
                    // prompt to enter a role title, salary in decimal format (no dollar sign), and department id
                    // db query to add new role to roles table
                    // return to main menu
                    break;
                case 'Add an employee':
                    // prompt to enter employee first name, last name, role id, and manager id (if they have a manager)
                    // db query to add new employee to employees table
                    // return to main menu
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
        })

}

mainMenu();

function viewAllDepts() {
    let allDept = db.query('SELECT * FROM department', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result)
    });
};

function viewAllRoles() {
    let allDept = db.query('SELECT * FROM role', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result)
    });
};

function viewAllEmps() {
    let allDept = db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result)
    });
};