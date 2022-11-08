import { db } from "../db";

//ajout
export const ajouter = (req , res)=>{

  
      const q = "INSERT INTO group(`id`,`name`) VALUES (?)";
      const values = [req.body.id, req.body.name];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("group has been created.");
      });
}