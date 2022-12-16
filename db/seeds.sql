INSERT INTO department ( name )
VALUES ("Human Resources"),
("Programming"),
("Accounting"),
("Marketing");

SELECT * FROM department;

INSERT INTO role ( title, salary, department_id )
VALUES ( "Director", "50000.00", 1),
("Accountant", "35000.00", 3),
("Coding Lead", "40000.00", 2);

SELECT * FROM role;

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ("Emily", "Pritchard", 3, null),
("Prashad", "Williams", 1, null),
("Grace", "Smith", 2, 2);

SELECT * FROM employee;