const express = require('express')
const app = express()
const gestionDepartment = require('./Routes/gestion_department')

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestion",gestionDepartment); 

app.listen(3004,()=>{
    console.log("server  runnig in port 3004")
});