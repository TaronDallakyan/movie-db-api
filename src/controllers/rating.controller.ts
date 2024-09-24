import { Request, Response } from "express";
import ratingService from "../services/rating.service";

class RatingController {
  async getRatings(req: Request, res: Response) {
    try {
      const ratings = await ratingService.getAllRatings();
      res.status(200).json(ratings);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getRatingByMovieId(req: Request, res: Response) {
    try {
      const rating = await ratingService.getRatingByMovieId(
        parseInt(req.params.movieId)
      );
      res.status(200).json(rating);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createRating(req: Request, res: Response) {
    try {
      await ratingService.createRating(req.body);
      res.status(201).json({ message: "Rating created successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateRating(req: Request, res: Response) {
    try {
      await ratingService.updateRating(parseInt(req.params.movieId), req.body);
      res.status(200).json({ message: "Rating updated successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteRating(req: Request, res: Response) {
    try {
      await ratingService.deleteRating(parseInt(req.params.movieId));
      res.status(200).json({ message: "Rating deleted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new RatingController();
