import {Router} from "express";
import {WatchLaterController} from "../controllers/watchLater.controller.js";

const router = Router();
const watchLaterController = new WatchLaterController();

router.post("/", watchLaterController.addToWatchLater);
router.get("/check/:tmdbId", watchLaterController.checkWatchLater);
router.delete("/:tmdbId", watchLaterController.removeFromWatchLater);

export default router;