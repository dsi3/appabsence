const express = require("express");
const router = express.Router()

router.get("/ajoutprof",async(req,res)=>{
    const Id_employer = req.body.Id_employer
    const Role= "prof"
    const emp_nom = req.body.emp_nom
    const emp_prenom= req.body.emp_prenom
    const emp_cin= req.body.emp_cin

    db.query("insert into employer(Id_employer,Role,emp_nom,emp_prenom,emp_cin) Values(?,?,?,?,?)",[Id_employer,Role,emp_nom,emp_prenom,emp_cin],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

        }
    });
});
router.get("/modi/:profid",async(req,res)=>{
    const Id_employer = req.body.Id_employer
    const Role= "prof"
    const emp_nom = req.body.emp_nom
    const emp_prenom= req.body.emp_prenom
    const emp_cin= req.body.emp_cin
db.query(
        "update employer set emp_prenom=?,emp_nom=?,emp_cin=? where Id_employer=?",[emp_prenom,emp_nom,emp_cin,Id_employer],
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
