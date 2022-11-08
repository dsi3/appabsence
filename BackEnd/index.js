import  express from "express";
import cors from "cors"
import  group from "./routes/group.js";
const app = express();

app.use(express.json());
app.use("/api/group", group);

app.listen(8800 , ()=>{
    console.log("backend connected")
})