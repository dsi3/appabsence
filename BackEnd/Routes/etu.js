const express = require("express");

const router = express.Router()

const db=require ('../database/connection')


 //add users to data base
router.get("/ajoutetu",async(req,res)=>{
    const nom = req.body.nom
    const prenom = req.body.prenom
    const cin = req.body.cin
db.query("INSERT INTO etudiant (nom_etu, prenom_etu, cin_etu) VALUES (?, ?, ?)",[nom,prenom,cin],   
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json(err)

        }
    });
});

 // display all users
router.get("/gerusers",async(req,res)=>{
    
    const Qry = 'select * from 	etudiant' ;  
    db.query(Qry,(err,result)=>{
        if(result){
        res.json(result)
        }
        else {
          res.json("selection dinied")
        }
    });
});


//update user by id
router.put("/updateuser",async(req,res)=>{
    const nom = req.body.nom
    const prenom = req.body.prenom
    const cin = req.body.cin // fetch data from the request
    db.query( "update etudiant set nom_etu=?, prenom_etu=?, cin_etu=?  where id_etudiant=?",[nom,prenom,cin],
        (err,result)=>{
            if(result){
                res.json("update succefull")
            }else{
                res.json({msg:"update denied",err})
            }
        }
    )
    
})
module.exports = router;