const db=require('./data');
const express = require('express');
const cors = require('cors');
const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())
app.get("/user", (req,res)=>{
    db.query("SELECT nom, prenom FROM admin", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
    app.listen(3100);
    app.post("/api/us", async (req,res) => {
    
        const firstname  = req.body.firstname;
        const lastname        =req.body.lastname;
        const apper         =req.body.apper;
        const id         =req.body.id;
        const email        =req.body.email;
        const password         =req.body.password;
        const carte        =req.body.carte;
        const classe         =req.body.classe;
         let sql="INSERT INTO etudiant ('cin`, `nom`, `prenom`, `carte_etu`, `nom_classe`, `appartient`, `email`, `passwod') VALUES ( '"+id+"','"+firstname+"','"+lastname+"''"+carte+"','"+classe+"','"+apper+"''"+email+"','"+password+"') ";
         db.query(sql);
         res.json({
             res:true
         })
      });
      app.post('/login', function(request, response) {
        // Capture the input fields
        let username = request.body.email;
        let password = request.body.password;
        // Ensure the input fields exists and are not empty
        if (username && password) {
            // Execute SQL query that'll select the account from the database based on the specified username and password
            connection.query('SELECT * FROM etudiant WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (results.length > 0) {
                    // Authenticate the user
                    request.session.loggedin = true;
                    request.session.username = username;
                    // Redirect to home page
                    response.redirect('/pagee');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }			
                response.end();
            });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    });