const mysql = require('mysql')

const db =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"appabsence",
});

db.connect(function(err) {
  console.log(err);

});
module.exports = db;
