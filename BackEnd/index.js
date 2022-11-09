const express = require('express')
const app = express()
const gestionMatiere = require('./gestions/Matiere')

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestionmatiere",gestionMatiere); 

app.listen(3080,()=>{
    console.log("server  runnig in port 3080")
});