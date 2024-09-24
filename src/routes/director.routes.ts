import { Router } from "express";
import directorController from "../controllers/director.controller";

const router = Router();

router.get("/directors", directorController.getDirectors);
router.get("/directors/:id", directorController.getDirectorById);
router.post("/directors", directorController.createDirector);
router.put("/directors/:id", directorController.updateDirector);
router.delete("/directors/:id", directorController.deleteDirector);

export default router;
