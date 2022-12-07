const express = require("express");
const router = express.Router()
const db=require ('../database/connection')


router.get("/ajoutgroup",async(req,res)=>{
    const id_grp = req.body.id 
    const gname = req.body.gname
    const Id_filieres=req.body.idf
    db.query("insert into group_table (	Id_group,group_name,Id_filieres) Values(?,?,?)",
    [id_grp,gname,Id_filieres],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json(err)

        }
    });
    });


router.get("/modi/:groupid",async(req,res)=>{
    const id_grp = req.params.id
    const name = req.body.name
   
    db.query(
        "update group_table set name=? where id=?",[name,id_grp],
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