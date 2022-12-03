const express = require("express");

const router = express.Router()

router.get("/ajoutdep",async(req,res)=>{
    const dep = req.body.dep
    db.query("insert into department (dep_name) Values(?,?)",[dep],
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
    db.query(
        "update department set dep=? where Id_departements=?",[dep,depId],
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