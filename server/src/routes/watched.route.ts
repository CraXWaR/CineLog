import {Router} from "express";
import {WatchedController} from "../controllers/watched.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const watchedController = new WatchedController();

router.post("/", authenticate, watchedController.addToWatched);
router.get("/check/:tmdbId", authenticate, watchedController.checkWatched);

export default router;