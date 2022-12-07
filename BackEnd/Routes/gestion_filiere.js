const express = require("express");

const router = express.Router()
const db=require ('../database/connection')


router.get("/ajoutfil",async(req,res)=>{
    const nomFiliere = req.body.nomFiliere
    db.query("insert into filieres(fil_name) Values(?)",[nomFiliere],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")
          
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
                    res.json("update denied")
                }
            }
        )
        
    })
});

module.exports = router;
