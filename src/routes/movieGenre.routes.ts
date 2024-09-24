import { Router } from "express";
import movieGenreController from "../controllers/movieGenre.controller";

const router = Router();

router.post("/movie-genres", movieGenreController.createMovieGenre);
router.delete("/movie-genres", movieGenreController.deleteMovieGenre);

export default router;
