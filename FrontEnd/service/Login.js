const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');


const app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


//Connect your NodeJS App to your mySQL DB


const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "db"
 });

 db.connect(function(err) {
   if (err)
   err
   console.log(err) ;

 });

 app.get('/', (req, res) => res.send("takwa"));
app.post('/auth', function(req, res) {
	// Capture the input fields
	let username = "takwa@gmail.com";
	let password = "123456";
    db.connect(function(err) {
        if (err)
        err
        console.log(err) ;
     
      });

	// Ensure the input fields exists and are not empty

		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM etudiant',function (error, results, fields)
        {
            if (error) console.log(error);

res.send(results)
        }
        )
     
    });
app.listen(3100);