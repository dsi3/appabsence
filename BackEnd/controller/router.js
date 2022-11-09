var gestion = require('../models/gestion_etu');
const path = require('path')





module.exports = {
  configure: function(app) {

    app.get('/api/users',function(req,res) {   
      gestion.getUsers(res);
    });
    
    app.post('/api/adduser',function(req,res) {
      gestion.addUsers(req,res);
    });
    
    app.post('/api/updateuser',function(req,res) {
      gestion.updateUsers(req,res);
    });

  
 
  }
};