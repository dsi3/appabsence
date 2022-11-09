var connection = require ('../mySql/db_Connection');

function manipul() {

  // display all users
  this.getUsers = function(res) {
    connection.acquire(function(err,con) {    
      const Qry = 'select * from 	etudiant' ;
            con.query(Qry, function(err,result) {
        con.release();
        res.send(result);
        console.log("Get successful");
      });
    });
  };
  
  //add users to data base
  this.addUsers = function(req,res) {
    const {nom,prenom,cin} = req.body
        // console.log(nom)

    connection.acquire(function(err,con) { 
      const Qry = "INSERT INTO `etudiant` (`nom_etu`, `prenom_etu`, `cin_etu`) VALUES (?, ?, ?);"   
      con.query(Qry,[nom,prenom,cin], function(err,result) {
        con.release();
        res.send({msg: "add successful"});
        console.log("add successful");
      });
    });
  };
  
  this.updateUsers = function(req,res) {
    const {id,nom,prenom,cin} = req.body
        // console.log(nom)

    connection.acquire(function(err,con) { 
      const Qry = "update etudiant set nom_etu=?, prenom_etu=?, cin_etu=?  where id_etudiant=?"
      con.query(Qry,[nom,prenom,cin,id], function(err,result) {
        if(!err){

          con.release();
          res.send({msg: "update successful"});
          console.log("update successful");
        }else{
          res.send({msg : "uodate error", errr:err}) 
         }
      });
    });
  };

  

};

module.exports = new manipul();