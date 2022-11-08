const express = require("express");
const router = express.Router()
const mysql = require('mysql')
const db =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"team",
});
db.connect(function(err) {
  console.log("Connected!");
});
router.get("/ajout",async(req,res)=>{
    const nomFiliere = req.body.nomFiliere
    db.query("insert into filiere(nom_filiere) Values(?)",[nomFiliere],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

            // hgfghj
        }
    });
});

module.exports = router;
