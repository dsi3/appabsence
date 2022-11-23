<<<<<<< HEAD

const express = require('express')
const app = express()
const gestionFiliere = require('./Routes/gestion_filiere')
=======
const express = require('express')
const app = express()
const gestionDepartment = require('./Routes/gestion_department')
>>>>>>> origin/main

const cors = require("cors")
app.use(express.json())
app.use(cors())
<<<<<<< HEAD
app.use("/gestion",gestionFiliere); 

app.listen(3004,()=>{
    console.log("server  runnig in port 3004")
});
=======
app.use("/gestion",gestionDepartment); 

app.listen(3004,()=>{
    console.log("server  runnig in port 3004")
});
>>>>>>> origin/main
