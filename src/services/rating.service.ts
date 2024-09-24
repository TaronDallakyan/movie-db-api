import pool from "../config/db";
import { Rating } from "../models/rating.model";

class RatingService {
  async getAllRatings(): Promise<Rating[]> {
    const result = await pool.query("SELECT * FROM Ratings");
    return result.rows;
  }

  async getRatingByMovieId(movieId: number): Promise<Rating> {
    const result = await pool.query(
      "SELECT * FROM Ratings WHERE MovieID = $1",
      [movieId]
    );
    return result.rows[0];
  }

  async createRating(rating: Rating): Promise<void> {
    const { MovieID, Rating } = rating;
    await pool.query("INSERT INTO Ratings (MovieID, Rating) VALUES ($1, $2)", [
      MovieID,
      Rating,
    ]);
  }

  async updateRating(movieId: number, rating: Rating): Promise<void> {
    const { Rating } = rating;
    await pool.query("UPDATE Ratings SET Rating = $1 WHERE MovieID = $2", [
      Rating,
      movieId,
    ]);
  }

  async deleteRating(movieId: number): Promise<void> {
    await pool.query("DELETE FROM Ratings WHERE MovieID = $1", [movieId]);
  }
}

export default new RatingService();
