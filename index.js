require('console.table');
const inquirer = require('inquirer');
const db = require('./queries');

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
                    allDepartments();
                    break;
                case 'View all roles':
                    // db query to view roles table
                    break;
                case 'View all employees':
                    // db query to view employee table
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

async function allDepartments() {
    const deptData = await db.viewAllDepts();
    console.table(deptData);
    mainMenu();
}
    //   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ])
