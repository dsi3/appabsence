const express = require("express");
const router = express.Router()
// const mysql = require('mysql')
// const db =mysql.createConnection({
//     user:"root",
//     host:"localhost",
//     password:"",
//     database:"appabsence",
// });

db.connect(function(err) {
  console.log("Connected!");
});

router.get("/getuser",async (req,res)=>{
  db.query("select * from etudiant",(err,result)=>{
    if(!err){
      // res.send(result)
      console.log(result)
    }else{
      // res.send(err)
      console.log(err)
    }
  })
})
// router.post("/ajout_etu",(req,res)=>{
  
// router.get("/modi/:depId",async(req,res)=>{
//     const depId = req.params.depId
//     const dep = req.body.dep
//     const specialite = req.body.specialite
//     db.query(
//         "update department set dep=?,specialite=? where id_dep=?",[dep,specialite,depId],
//         (err,result)=>{
//             if(result){
//                 res.json("update succefull")
//             }else{
//                 res.json("update denied")
//             }
//         }
//     )
    
// })
module.exports = router;