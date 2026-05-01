import {Router} from "express";

const router = Router();

router.get("/", async (req, res) => {
    res.json({message: "Hello from test route CineLog!"})
});

export default router;