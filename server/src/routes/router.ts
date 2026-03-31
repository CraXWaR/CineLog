import {Router} from "express";

const router = Router();

router.get("/", async (req, res) => {
    console.log(123);
    res.json({message: "Hello from CineLog!"})
});

export default router;