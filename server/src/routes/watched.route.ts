import {Router} from "express";
import {WatchedController} from "../controllers/watched.controller.js";

const router = Router();
const watchedController = new WatchedController();

router.post("/", watchedController.addToWatched);
router.get("/check/:tmdbId", watchedController.checkWatched);

export default router;