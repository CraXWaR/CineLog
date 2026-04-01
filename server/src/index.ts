import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();
const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

app.use(router);
app.use('/api', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})