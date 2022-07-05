const fetch = require ('node-fetch');
// let fetch = import('node-fetch')

const mysql = require('mysql2');
const inquirer = require('inquirer'); 
const { resourceLimits } = require('worker_threads');


// Create Connection 
const connection = mysql.createConnection ({
    host :"localhost",
    user  :"root",
    password :"Trav4235$",
    database :'tracker'

});


const start = () => {
    connection.connect(function(err) {
        if(err) {
            console.log('connection error:' + err.stack);
        } else{




    inquirer.prompt(
        {
            name: 'greeting',
            type: 'list',
            message: 'What do you want to do',
            choices: ['View all employees', 'view all departments', 'add a department', 'add a role', 'add an employee', 'update an employee role']
       },






       
            ).then(function (answer) {
                if (answer['greeting'] == ("View all employees")) {
                    connection.query(
                        "SELECT * FROM employees",
                        function (err, results, fields) {
                            if (err) {
                                console.log(err);
                            } else {
                                Object.keys(results).forEach(key => {
                                    console.log(results[key]);
                                });
                            }
                        }



                    );
                }
            });
            // connection.end();
        };

    }
    );
};

        


 



// const app = express();

class Department {
    constructor(id, name) {
        this.name=name
        this.value=id
    }
}

class Role {
    constructor(id, role, title, salary) {
        this.value=id
        this.role=role
        this.title=title
        this.salary=salary
    }
}

class Employee {
    constructor(first_name, last_name, role_id, manager_id) {
    this.value=id
    this.first_name=first_name
    this.last_name=last_name
    this.role_id=role_id
    this.manager_id=manager_id
    }
}


// Create DB

// const newDepartment = () => {
//     connection.query('SELECT * FROM department', (err, res) => {
        
//     } );

// }

connection.connect ((err) => {
    if(err) throw err
    start()
})

 