import { Router } from "express";
import ratingController from "../controllers/rating.controller";

const router = Router();

router.get("/ratings", ratingController.getRatings);
router.get("/ratings/:movieId", ratingController.getRatingByMovieId);
router.post("/ratings", ratingController.createRating);
router.put("/ratings/:movieId", ratingController.updateRating);
router.delete("/ratings/:movieId", ratingController.deleteRating);

export default router;
