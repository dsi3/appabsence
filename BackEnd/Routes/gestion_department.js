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
    const dep = req.body.dep
    const specialite = req.body.specialite
    db.query("insert into department(dep,specialite) Values(?,?)",[dep,specialite],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

        }
    });
});
module.exports = router;
