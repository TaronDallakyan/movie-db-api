import pool from "../config/db";
import { Actor } from "../models/actor.model";

class ActorService {
  async getAllActors(): Promise<Actor[]> {
    const result = await pool.query("SELECT * FROM Actors");
    return result.rows;
  }

  async getActorById(id: number): Promise<Actor> {
    const result = await pool.query("SELECT * FROM Actors WHERE ActorID = $1", [
      id,
    ]);
    return result.rows[0];
  }

  async createActor(actor: Actor): Promise<void> {
    const { Name, Nationality, DOB } = actor;
    await pool.query(
      "INSERT INTO Actors (Name, Nationality, DOB) VALUES ($1, $2, $3)",
      [Name, Nationality, DOB]
    );
  }

  async updateActor(id: number, actor: Actor): Promise<void> {
    const { Name, Nationality, DOB } = actor;
    await pool.query(
      "UPDATE Actors SET Name = $1, Nationality = $2, DOB = $3 WHERE ActorID = $4",
      [Name, Nationality, DOB, id]
    );
  }

  async deleteActor(id: number): Promise<void> {
    await pool.query("DELETE FROM Actors WHERE ActorID = $1", [id]);
  }
}

export default new ActorService();
