import { Request, Response } from "express";
import actorService from "../services/actor.service";

class ActorController {
  async getActors(req: Request, res: Response) {
    try {
      const actors = await actorService.getAllActors();
      res.status(200).json(actors);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getActorById(req: Request, res: Response) {
    try {
      const actor = await actorService.getActorById(parseInt(req.params.id));
      res.status(200).json(actor);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createActor(req: Request, res: Response) {
    try {
      await actorService.createActor(req.body);
      res.status(201).json({ message: "Actor created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateActor(req: Request, res: Response) {
    try {
      await actorService.updateActor(parseInt(req.params.id), req.body);
      res.status(200).json({ message: "Actor updated successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteActor(req: Request, res: Response) {
    try {
      await actorService.deleteActor(parseInt(req.params.id));
      res.status(200).json({ message: "Actor deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ActorController();
