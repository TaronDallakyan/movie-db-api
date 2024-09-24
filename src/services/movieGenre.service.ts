import pool from "../config/db";
import { MovieGenre } from "../models/movieGenre.model";

class MovieGenreService {
  async createMovieGenre(movieId: number, genreId: number): Promise<void> {
    await pool.query(
      "INSERT INTO MovieGenres (MovieID, GenreID) VALUES ($1, $2)",
      [movieId, genreId]
    );
  }

  async deleteMovieGenre(movieId: number, genreId: number): Promise<void> {
    await pool.query(
      "DELETE FROM MovieGenres WHERE MovieID = $1 AND GenreID = $2",
      [movieId, genreId]
    );
  }
}

export default new MovieGenreService();
