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

          
        }
    });
    router.get("/modi/:filId",async(req,res)=>{
        const filId = req.params.filId
     
        const nomFiliere = req.body.nomFiliere
        db.query(
            "update filiere set nom_filiere=? where id_filiere=?",[nomFiliere,filId],
            (err,result)=>{
                if(result){
                    res.json("update succefull")
                }else{
                    res.json("update denied")
                }
            }
        )
        
    })
});

module.exports = router;
