import {Router} from 'express';
import {ReviewController} from "../controllers/review.controller.js";
import authenticate from "../middlewares/authenticate.js";

const reviewController = new ReviewController();

const router = Router();

router.patch('/:tmdbId', authenticate, reviewController.saveReview);
router.get('/:tmdbId', authenticate, reviewController.getReview);

export default router;