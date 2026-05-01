import {Router} from 'express';
import {UserController} from "../controllers/user.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const userController = new UserController();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/refresh', userController.refresh);

router.get('/:publicId', userController.getPublicProfile)
router.get('/:publicId/movies', userController.getProfileMovies)

export default router;