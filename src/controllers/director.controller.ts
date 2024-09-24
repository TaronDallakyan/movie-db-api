import { Request, Response } from "express";
import directorService from "../services/director.service";

class DirectorController {
  async getDirectors(req: Request, res: Response) {
    try {
      const directors = await directorService.getAllDirectors();
      res.status(200).json(directors);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getDirectorById(req: Request, res: Response) {
    try {
      const director = await directorService.getDirectorById(
        parseInt(req.params.id)
      );
      res.status(200).json(director);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createDirector(req: Request, res: Response) {
    try {
      await directorService.createDirector(req.body);
      res.status(201).json({ message: "Director created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateDirector(req: Request, res: Response) {
    try {
      await directorService.updateDirector(parseInt(req.params.id), req.body);
      res.status(200).json({ message: "Director updated successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteDirector(req: Request, res: Response) {
    try {
      await directorService.deleteDirector(parseInt(req.params.id));
      res.status(200).json({ message: "Director deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DirectorController();
