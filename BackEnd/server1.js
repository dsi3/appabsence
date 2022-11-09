const express = require('express')
const app = express()
// const gestionEtu = require('./Routes/gestion_etu')

const cors = require("cors")
app.use(express.json())
app.use(cors())
// app.use("/gestion",gestionEtu); 

app.listen(3004,()=>{
    console.log("server  runnig in port 3004")
});