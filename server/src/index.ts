import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";
import userRouter from "./routes/user.routes.js";
import movieRouter from "./routes/movie.routes.js";
import watchedRouter from "./routes/watched.route.js";
import watchLaterRouter from "./routes/watchLater.route.js";

dotenv.config();
const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

app.use(router);
app.use('/api', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/watched', watchedRouter);
app.use('/api/watch-later', watchLaterRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})