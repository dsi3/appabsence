const express = require("express");

const router = express.Router()


 //add users to data base
router.post("/ajoutetu",async(req,res)=>{
    
  const {nom,prenom,cin} = req.body // fetch data from the request
  const Qry = "INSERT INTO `etudiant` (`nom_etu`, `prenom_etu`, `cin_etu`) VALUES (?, ?, ?);"   
  
    db.query(Qry,[nom,prenom,cin],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

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
    const {id,nom,prenom,cin} = req.body // fetch data from the request
    const Qry = "update etudiant set nom_etu=?, prenom_etu=?, cin_etu=?  where id_etudiant=?"
    db.query(Qry,[nom,prenom,cin,id],
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