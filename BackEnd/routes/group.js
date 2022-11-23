const express = require("express");
const router = express.Router()
const mysql = require('mysql')

const db =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"jiraproject",
});
db.connect(function(err) {
  console.log("Connected!");
});


router.get("/ajout",async(req,res)=>{
    const id_grp = req.body.id
    const name = req.body.name
    db.query("insert into group_user (id,name) Values(?,?)",
    [id_grp,name],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

        }
    });
    });


router.get("/modi/:id",async(req,res)=>{
    const id_grp = req.params.id
    const name = req.body.name
   
    db.query(
        "update group_user set name=? where id=?",[name,id_grp],
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