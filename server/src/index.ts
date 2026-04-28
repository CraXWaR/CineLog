import "./config/env.js";
import express from "express";
import cors from "cors";

import router from "./routes/router.js";
import userRouter from "./routes/user.routes.js";
import movieRouter from "./routes/movie.routes.js";
import watchedRouter from "./routes/watched.routes.js";
import watchLaterRouter from "./routes/watchLater.routes.js";
import friendsRouter from "./routes/friends.routes.js";

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

app.use(router);
app.use('/api', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/watched', watchedRouter);
app.use('/api/watch-later', watchLaterRouter);
app.use('/api/friends', friendsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})