import express from "express";
import directorRoutes from "./routes/director.routes";
import actorRoutes from "./routes/actor.routes";
import genreRoutes from "./routes/genre.routes";
import movieRoutes from "./routes/movie.routes";
import ratingRoutes from "./routes/rating.routes";
import movieGenreRoutes from "./routes/movieGenre.routes";

const app = express();

app.use("/api", directorRoutes);
app.use("/api", actorRoutes);
app.use("/api", genreRoutes);
app.use("/api", movieRoutes);
app.use("/api", ratingRoutes);
app.use("/api", movieGenreRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
