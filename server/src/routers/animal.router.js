import { Router } from "express";
import {
  getAnimal,
  getAnimalId,
  deleteAnimal,
  createAnimal,
  updateAnimal,
} from "../controllers/animal.controllers.js";

const router = Router();

router.get("/animal", getAnimal);

router.post("/animal", createAnimal);

router.get("/animal/:id", getAnimalId);

router.delete("/animal/:id", deleteAnimal);

router.put("/animal/:id", updateAnimal);

export default router;
