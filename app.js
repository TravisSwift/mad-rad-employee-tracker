const express = require('express');
const mysql = require ('mysql2');

// Create Connection 
const db = mysql.createConnection ({
    host :"localhost",
    user  :"root",
    password :"password",
    database :'department'

});

// connect

db.connect(() => {
if(err) {
    throw err;
}
    console.log('MySQL Connected...')
});

const app = express();

// Create DB

app.get('/createdb',() (req, resp) => {
    let sql = 'CREATE DATABASE employees';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send('database created...');
    });
});

app.listen('3000', () => {
    console.log('server started on port 3000');
});