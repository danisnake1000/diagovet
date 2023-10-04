import { Router } from "express";
import {
  createAnalysis,
  getAnalysis,
  getAnalysisId,
  deleteAnalysis,
  updateAnalysis,
} from "../controllers/analisys.controllers.js";

const router = Router();

router.post("/analysis", createAnalysis);

router.get("/analysis", getAnalysis);

router.get("/analysis/:id", getAnalysisId);

router.delete("/analysis/:id", deleteAnalysis);

router.put("/analysis/:id", updateAnalysis);

export default router;
