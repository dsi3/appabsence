
const express = require('express')
const app = express()
const gestionFiliere = require('./Routes/gestion_filiere')

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestion",gestionFiliere); 

app.listen(3004,()=>{
    console.log("server  runnig in port 3004")
});
