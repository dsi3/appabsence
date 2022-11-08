import { db } from "../db.js";

//ajout
export const ajouter = (req , res)=>{
  const q = "SELECT * FROM group_user WHERE id = ? ";

  db.query(q, [req.body.id, req.body.name], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("group already exists!");

    const q = "INSERT INTO group_user(`id`,`name`) VALUES (?)";
    const values = [req.body.id, req.body.name];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Group has been created.");
    });
  });
  
}

//modifier
export const modifier = (req , res)=>{
var id_grp = req.params.id;

const sql = "UPDATE group_user SET `name`= ? WHERE id = ?";

const values = [
  req.body.name,
];

db.query(sql, [...values,id_grp], (err, data) => {
  if (err) return res.send(err);
  return res.json(data);
});


}
