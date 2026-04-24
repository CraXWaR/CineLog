import {Router} from 'express';
import {UserController} from "../controllers/user.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const userController = new UserController();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me/movies', authenticate, userController.getUserMovies);
router.post('/refresh', userController.refresh);

export default router;