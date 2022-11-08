import express from "express";

import { ajouter , modifier } from "../controllers/group.js";

const router = express.Router();

router.post("/ajouter", ajouter);
router.put("/modifier/:id",modifier);
export default router;