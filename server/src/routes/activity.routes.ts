import { Router } from "express";
import { ActivityController } from "../controllers/activity.controller.js";

const router = Router();
const controller = new ActivityController();

router.get("/feed", controller.getFeed);
router.get("/all-feeds", controller.getAllFeeds);

export default router;