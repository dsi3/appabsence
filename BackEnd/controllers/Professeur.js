import { connection } from "../database/connection";

//ajout
export const ajouter = (req , res)=>{
  const sql = "SELECT * FROM employer WHERE Role =`prof` and id= ?   ";

  connection.query(sql, [req.body.id, req.body.name,req.body.prenom,req.body.cin], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("professure already exists!");

    const sql = "INSERT INTO employer(`id`,`name`,`prenom`,`cin`)where Role =`prof` VALUES (?)";
    const values = [req.body.id, req.body.name];

    connection.query(sql, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Professeur has been created.");
    });
  });
  
}

//modifier
export const modifier = (req , res)=>{
var Id_employer = req.params.id;

const sql = "UPDATE employer SET `name`= ? WHERE Role =`prof` id = ?";

const values = [
  req.body.name,
  req.body.prenom,
  req.body.cin,
];

connection.query(sql, [...values,Id_employer], (err, data) => {
  if (err) return res.send(err);
  return res.json(data);
});


}