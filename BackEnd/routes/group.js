const express = require("express");
const router = express.Router()


router.get("/ajoutgroup",async(req,res)=>{
  /*   const id_grp = req.body.id */
    const name = req.body.name
    db.query("insert into group_table (group_name,name) Values(?,?)",
    [id_grp,name],
    (err,result)=>{
        if(result){
        res.json("added succefull")}
         else {
            res.json("ajout dinied")

        }
    });
    });


router.get("/modi/:groupid",async(req,res)=>{
    const id_grp = req.params.id
    const name = req.body.name
   
    db.query(
        "update group_table set name=? where id=?",[name,id_grp],
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