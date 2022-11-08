import { db } from "../db";
//ajout
export const ajouter=(req , res)=>{
var id = req.body.id;
var name = req.body.name;

var sql = "INSERT into group (id , name) VALUES (id , name)";
}