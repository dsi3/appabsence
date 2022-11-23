<<<<<<< HEAD
const express = require('express')
const app = express()
const gestionGroup = require('./routes/group')
=======
<<<<<<< HEAD

const express = require('express')
const app = express()
const gestionFiliere = require('./Routes/gestion_filiere')
=======
const express = require('express')
const app = express()
const gestionDepartment = require('./Routes/gestion_department')
>>>>>>> origin/main
>>>>>>> dd776c06ef6507f8ac435705232d6f21200c5f89

const cors = require("cors")
app.use(express.json())
app.use(cors())
<<<<<<< HEAD
app.use("/gestionGroup",gestionGroup); 

app.listen(3004,()=>{
    console.log("server runnig in port 3004")
});
=======
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
>>>>>>> dd776c06ef6507f8ac435705232d6f21200c5f89
