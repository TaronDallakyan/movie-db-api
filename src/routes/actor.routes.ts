import { Router } from "express";
import actorController from "../controllers/actor.controller";

const router = Router();

router.get("/actors", actorController.getActors);
router.get("/actors/:id", actorController.getActorById);
router.post("/actors", actorController.createActor);
router.put("/actors/:id", actorController.updateActor);
router.delete("/actors/:id", actorController.deleteActor);

export default router;
