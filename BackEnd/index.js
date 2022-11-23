const express = require('express')
const app = express()
const prof = require('./routes/Professeur')

const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use("/gestion",prof); 

app.listen(3001,()=>{
    console.log("server  runnig in port 3001")
});