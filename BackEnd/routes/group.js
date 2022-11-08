import express from "express";

import { ajouter } from "../controllers/group.js";

const router = express.Router();

router.post("/ajouter", ajouter);

export default router;