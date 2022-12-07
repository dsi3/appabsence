const express = require('express')
const app = express()
const prof = require('./Routes/Professeur')
const gestionGroup = require('./Routes/group')
const gestionFiliere = require('./Routes/gestion_filiere')
const gestionDepartment = require('./Routes/gestion_department')
const gestionMatiere = require('./Routes/gestionMatiere')
const gestionEtud = require('./Routes/etu')
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestionGroup",gestionGroup); 
app.use("/gestionFiliere",gestionFiliere); 
app.use("/gestionDepartment",gestionDepartment); 
app.use("/gestionprof",prof); 
app.use("/gestionmatiere",gestionMatiere); 
app.use("/gestionEtu",gestionEtud); 

app.listen(3001,()=>{
    console.log("server  runnig in port 3001")
});