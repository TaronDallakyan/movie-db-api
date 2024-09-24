import { Router } from "express";
import movieController from "../controllers/movie.controller";

const router = Router();

router.get("/movies", movieController.getMovies);
router.get("/movies/:id", movieController.getMovieById);
router.post("/movies", movieController.createMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);

export default router;
