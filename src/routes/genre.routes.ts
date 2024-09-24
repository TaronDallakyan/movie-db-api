import { Router } from "express";
import genreController from "../controllers/genre.controller";

const router = Router();

router.get("/genres", genreController.getGenres);
router.get("/genres/:id", genreController.getGenreById);
router.post("/genres", genreController.createGenre);
router.put("/genres/:id", genreController.updateGenre);
router.delete("/genres/:id", genreController.deleteGenre);

export default router;
