import express from "express";

import {
  getLeads,
  getLead,
  addLead,
  editLead,
  removeLead,
    getSources,
} from "../controllers/leadController.js";

const router = express.Router();


router.get("/sources", getSources);


router.get("/", getLeads);

router.get("/:id", getLead);

router.post("/", addLead);

router.put("/:id", editLead);

router.delete("/:id", removeLead);

export default router;