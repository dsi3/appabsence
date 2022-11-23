const express = require('express')
const app = express()
const gestionGroup = require('./routes/group')

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestionGroup",gestionGroup); 

app.listen(3004,()=>{
    console.log("server runnig in port 3004")
});