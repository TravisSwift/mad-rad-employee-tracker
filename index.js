const fetch = require ('node-fetch');
// let fetch = import('node-fetch')

const mysql = require('mysql2');
const inquirer = require('inquirer'); 


// Create Connection 
const connection = mysql.createConnection ({
    host :"localhost",
    user  :"root",
    password :"Trav4235$",
    database :'department'

});

const start = () => {
    inquirer.prompt(
        {
            name: 'mainquestion',
            type: 'list',
            message: 'User sees this question',
            choices: ['this is a choice', 'second choice', 'third']
        }

    ).then((answer) => {
        console.log(answer)
        connection.end();
    })
}
 



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

const newDepartment = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        
    } );

}

connection.connect ((err) => {
    if(err) throw err
    start()
})

// connect

// db.connect(() => {
//     if(err) {
//         throw err;
//     }
//         console.log('MySQL Connected...')
//     });

// app.get('/createdb') (req, res) => {
    
//     let sql = 'CREATE DATABASE department';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result)
//         res.send('database created...');
//     });
// };

// listen('3000', () => {
//     console.log('server started on port 3000');
// });