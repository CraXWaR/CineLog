import {Router} from 'express';
import {MovieController} from "../controllers/movie.controller.js";

const router = Router();
const movieController = new MovieController();

router.get('/trending', movieController.getTrendingMovies);
router.get('/genres', movieController.getMovieGenres);

export default router;