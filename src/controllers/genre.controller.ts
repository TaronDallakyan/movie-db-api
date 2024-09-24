import { Request, Response } from "express";
import genreService from "../services/genre.service";

class GenreController {
  async getGenres(req: Request, res: Response) {
    try {
      const genres = await genreService.getAllGenres();
      res.status(200).json(genres);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getGenreById(req: Request, res: Response) {
    try {
      const genre = await genreService.getGenreById(parseInt(req.params.id));
      res.status(200).json(genre);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createGenre(req: Request, res: Response) {
    try {
      await genreService.createGenre(req.body);
      res.status(201).json({ message: "Genre created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateGenre(req: Request, res: Response) {
    try {
      await genreService.updateGenre(parseInt(req.params.id), req.body);
      res.status(200).json({ message: "Genre updated successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteGenre(req: Request, res: Response) {
    try {
      await genreService.deleteGenre(parseInt(req.params.id));
      res.status(200).json({ message: "Genre deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new GenreController();
