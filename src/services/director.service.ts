import pool from "../config/db";
import { Director } from "../models/director.model";

class DirectorService {
  async getAllDirectors(): Promise<Director[]> {
    const result = await pool.query("SELECT * FROM Directors");
    return result.rows;
  }

  async getDirectorById(id: number): Promise<Director> {
    const result = await pool.query(
      "SELECT * FROM Directors WHERE DirectorID = $1",
      [id]
    );
    return result.rows[0];
  }

  async createDirector(director: Director): Promise<void> {
    const { Name, Nationality, DOB } = director;
    await pool.query(
      "INSERT INTO Directors (Name, Nationality, DOB) VALUES ($1, $2, $3)",
      [Name, Nationality, DOB]
    );
  }

  async updateDirector(id: number, director: Director): Promise<void> {
    const { Name, Nationality, DOB } = director;
    await pool.query(
      "UPDATE Directors SET Name = $1, Nationality = $2, DOB = $3 WHERE DirectorID = $4",
      [Name, Nationality, DOB, id]
    );
  }

  async deleteDirector(id: number): Promise<void> {
    await pool.query("DELETE FROM Directors WHERE DirectorID = $1", [id]);
  }
}

export default new DirectorService();
