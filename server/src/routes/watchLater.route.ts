import {Router} from "express";
import {WatchLaterController} from "../controllers/watchLater.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const watchLaterController = new WatchLaterController();

router.post("/", authenticate, watchLaterController.addToWatchLater);
router.get("/check/:tmdbId", authenticate, watchLaterController.checkWatchLater);
router.delete("/:tmdbId", authenticate, watchLaterController.removeFromWatchLater);

export default router;