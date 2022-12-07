const express = require("express");

const router = express.Router()

const db=require ('../database/connection')


 //add users to data base
router.get("/ajoutetu",async(req,res)=>{
    const idgr = req.body.idgr
    const id_etu= req.body.id_etu
    const nom = req.body.nom
    const prenom = req.body.prenom
    const cin = req.body.cin
db.query("INSERT INTO etudiant (Id_etudiant,nom_etu, prenom_etu, cin_etu,Id_group=?) VALUES (?,?, ?, ?,?)",[id_etu,nom,prenom,cin,idgr],   
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
          res.json(err)
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