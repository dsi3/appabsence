const express = require("express");
const router = express.Router()
const mysql = require('mysql')
const db =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"appabsence",
});
db.connect(function(err) {
  console.log("Connected!");
});
router.get("/ajouter",async(req,res)=>{
    const Id_matier = req.body.Id_matier
    const mat_name = req.body.mat_name
    db.query("insert into matier(Id_matier,mat_name) Values(?,?)",[Id_matier,mat_name],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

        }
    });
});
router.get("/modifer/:matId",async(req,res)=>{
    const Id_matier = req.params.Id_matier
    const mat_name = req.body.mat_name
    db.query(
        "update matier set mat_name=? where id_dep=?",[mat_name,Id_matier],
        (err,result)=>{
            if(result){
                res.json("update succefull")
            }else{
                res.json("update denied")
            }
        }
    )
    
})
module.exports = router;
