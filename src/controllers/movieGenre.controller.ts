import { Request, Response } from "express";
import movieGenreService from "../services/movieGenre.service";

class MovieGenreController {
  async createMovieGenre(req: Request, res: Response) {
    try {
      const { movieId, genreId } = req.body;
      await movieGenreService.createMovieGenre(movieId, genreId);
      res.status(201).json({ message: "MovieGenre created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteMovieGenre(req: Request, res: Response) {
    try {
      const { movieId, genreId } = req.body;
      await movieGenreService.deleteMovieGenre(movieId, genreId);
      res.status(200).json({ message: "MovieGenre deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new MovieGenreController();
