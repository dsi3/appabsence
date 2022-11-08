
import { db } from "../db.js";

//ajout
export const ajouter = (req , res)=>{
  const q = "SELECT * FROM group WHERE id = ?";

  db.query(q, [req.body.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("group already exists!");
    const q = "INSERT INTO group(`id`,`name`) VALUES (?)";
    const values = [req.body.id, req.body.name];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("group has been created.");
    });
  });
}