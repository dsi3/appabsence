const express = require("express");

const router = express.Router()
const db=require ('../database/connection')


router.get("/ajoutfil",async(req,res)=>{
    const Id_fel= req.body.Id_fel
    const Id_departements = req.body.Id_departements	
    const nomFiliere = req.body.nomFiliere
    db.query("insert into filieres(Id_departements,fil_name,Id_filieres) Values(?,?,?)",[Id_departements,nomFiliere,Id_fel],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json(err)
          
        }
    });
    router.get("/modi/:filid",async(req,res)=>{
        const filId = req.params.filId
     
        const nomFiliere = req.body.nomFiliere
        db.query(
            "update filieres set fil_name=? where Id_filieres=?",[nomFiliere,filId],
            (err,result)=>{
                if(result){
                    res.json("update succefull")
                }else{
                    res.json(err)
                }
            }
        )
        
    })
});

module.exports = router;
