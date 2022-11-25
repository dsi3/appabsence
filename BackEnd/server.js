const express = require('express')
const app = express()
const gestionEtud = require('./Routes/gestion_etu')

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestionEtu",gestionEtud); 

app.listen(3004,()=>{
    console.log("server  runnig in port 3004")
});