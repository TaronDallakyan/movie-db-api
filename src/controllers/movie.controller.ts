import { Request, Response } from "express";
import movieService from "../services/movie.service";

class MovieController {
  async getMovies(req: Request, res: Response) {
    try {
      const movies = await movieService.getAllMovies();
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getMovieById(req: Request, res: Response) {
    try {
      const movie = await movieService.getMovieById(parseInt(req.params.id));
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createMovie(req: Request, res: Response) {
    try {
      await movieService.createMovie(req.body);
      res.status(201).json({ message: "Movie created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateMovie(req: Request, res: Response) {
    try {
      await movieService.updateMovie(parseInt(req.params.id), req.body);
      res.status(200).json({ message: "Movie updated successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteMovie(req: Request, res: Response) {
    try {
      await movieService.deleteMovie(parseInt(req.params.id));
      res.status(200).json({ message: "Movie deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new MovieController();
