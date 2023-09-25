import { Router } from "express";
import {
  getAnimal,
  getAnimals,
  deleteAnimal,
  createAnimal,
  updateAnimal,
} from "../controllers/animal.controllers.js";

const router = Router();

router.get("/animal", getAnimals);

router.post("/animal", createAnimal);

router.get("/animal/:id", getAnimal);

router.delete("/animal/:id", deleteAnimal);

router.put("/animal/:id", updateAnimal);

export default router;
