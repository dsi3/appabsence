const express = require("express");

const router = express.Router()

router.get("/ajoutdep",async(req,res)=>{
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
router.get("/modi/:depid",async(req,res)=>{
    const depId = req.params.depId
    const dep = req.body.dep
    const specialite = req.body.specialite
    db.query(
        "update department set dep=?,specialite=? where id_dep=?",[dep,specialite,depId],
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