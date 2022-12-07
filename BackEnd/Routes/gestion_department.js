const express = require("express");

const router = express.Router()
const db=require ('../database/connection')


router.get("/ajoutdep",async(req,res)=>{
    const Id_departements	=req.body.dep
    const dep = req.body.dep
    db.query("insert into departements (Id_departements,dep_name) Values(?,?)",[dep],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json(err)

        }
    });
});
router.get("/modi/:depid",async(req,res)=>{
    const depId = req.params.depId
    const dep = req.body.dep
    db.query(
        "update departements set dep=? where Id_departements=?",[dep,depId],
        (err,result)=>{
            if(result){
                res.json("update succefull")
            }else{
                res.json(err)
            }
        }
    )
    
})
module.exports = router;