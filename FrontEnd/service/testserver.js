const express = require("express");
const cors =require('cors');
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./assemblage.js");
const path = require('path');
/*  const index =require("../src/index");  */
const app=express();

app.use(express.json());
app.use(cors());




//Connect your NodeJS App to your mySQL DB
const mysql = require('mysql');

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "db"
 });

 db.connect(function(err) {
   if (err) console.log( err);
   console.log("Connecté à la base de données MySQL!");

 });

 
// Login : indentify user with database 
app.post("/api/login",function(req,res) { 

  var email     =     req.body.email;
  var password =     req.body.password;
  
  
    db.query('SELECT * FROM etudiant WHERE email = ? AND password = ?',[email,password], function(err,row){
      
     // if(err) throw err;
     
      // If the account exists
      console.log("row="+row.length)
      if(row.length > 0 )
      {
        	// Authenticate the user
          res.send({"success":true,
          "message":row[0].email});
      }
      else
      {
          //res.send('Incorrect email and/or Password!');
          console.log(res);
           res.sendStatus(500);
           return;
      
         
      }

      res.json({
        res:true
  });
}

);
});

 
//  INSERT USER TO database 
/*     app.post("/api/createUser", async (req,res) => {
    const fname = req.body.fristname;
    const lname =req.body.lastname;
    const cin =req.body.carteEtudiant;
    const classe =req.body.classe;

    

   
     let sql="INSERT INTO etudiant ( nom, prenom, carteetudiant, classe) VALUES ( '"+fname+"','"+lname+"','"+cin+"','"+classe+"') ";
     db.query(sql);
     res.json({
         res:true
     })
 });

 // ADMIN INSERT TO database 
 app.post("/api/createDisplay", async (req,res) => {
  const departement   = req.body.departement;
  const classe        =req.body.classe;
  const text          =req.body.text;


   let sql="INSERT INTO affiche (departement , classe, text) VALUES ( '"+departement+"','"+classe+"','"+text+"') ";
   db.query(sql);
   res.json({
       res:true
   })
});

 */ 
/* 
app.get('/', (req, res) => res.send("takwa"));
 *//* 
app.get("/", (req, res) => res.send(welcomeMessage));
app.post("/api/GenerateJWT", (req, res) =>
 res.json(GenerateJWT(req.body.claims,
))
);
app.post("/api/DecodeJWT", (req, res) => 
 res.json(DecodeJWT(req.body.sJWS))
);
app.post("/api/ValidateJWT", (req, res) =>
 res.json(ValidateJWT( req.body.token))
);

 */


app.listen(3100);
