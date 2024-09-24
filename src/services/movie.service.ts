import pool from "../config/db";
import { Movie } from "../models/movie.model";

class MovieService {
  async getAllMovies(): Promise<Movie[]> {
    const result = await pool.query("SELECT * FROM Movies");
    return result.rows;
  }

  async getMovieById(id: number): Promise<Movie> {
    const result = await pool.query("SELECT * FROM Movies WHERE MovieID = $1", [
      id,
    ]);
    return result.rows[0];
  }

  async createMovie(movie: Movie): Promise<void> {
    const { Title, ReleaseYear, DirectorID } = movie;
    await pool.query(
      "INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3)",
      [Title, ReleaseYear, DirectorID]
    );
  }

  async updateMovie(id: number, movie: Movie): Promise<void> {
    const { Title, ReleaseYear, DirectorID } = movie;
    await pool.query(
      "UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4",
      [Title, ReleaseYear, DirectorID, id]
    );
  }

  async deleteMovie(id: number): Promise<void> {
    await pool.query("DELETE FROM Movies WHERE MovieID = $1", [id]);
  }
}

export default new MovieService();
