const express = require("express");

const router = express.Router()

router.get("/ajoutfil",async(req,res)=>{
    const nomFiliere = req.body.nomFiliere
    db.query("insert into filiere(fil_name) Values(?)",[nomFiliere],
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
            "update filiere set fil_name=? where id_filiere=?",[nomFiliere,filId],
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
