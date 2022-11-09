import express from "express";
import { ajouter , modifier } from "../controllers/Professeur.js";
const router = express.Router();

router.post("/ajouterp", ajouter);
router.put("/modifierp/:id",modifier);
export default router;