import pool from "../config/db";
import { Genre } from "../models/genre.model";

class GenreService {
  async getAllGenres(): Promise<Genre[]> {
    const result = await pool.query("SELECT * FROM Genres");
    return result.rows;
  }

  async getGenreById(id: number): Promise<Genre> {
    const result = await pool.query("SELECT * FROM Genres WHERE GenreID = $1", [
      id,
    ]);
    return result.rows[0];
  }

  async createGenre(genre: Genre): Promise<void> {
    const { GenreName } = genre;
    await pool.query("INSERT INTO Genres (GenreName) VALUES ($1)", [GenreName]);
  }

  async updateGenre(id: number, genre: Genre): Promise<void> {
    const { GenreName } = genre;
    await pool.query("UPDATE Genres SET GenreName = $1 WHERE GenreID = $2", [
      GenreName,
      id,
    ]);
  }

  async deleteGenre(id: number): Promise<void> {
    await pool.query("DELETE FROM Genres WHERE GenreID = $1", [id]);
  }
}

export default new GenreService();
