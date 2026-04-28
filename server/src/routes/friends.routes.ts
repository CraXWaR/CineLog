import {Router} from 'express';
import {FriendsController} from "../controllers/friends.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const friendsController = new FriendsController();

router.post('/request', authenticate, friendsController.sendRequest);
router.get('/status/:publicId', authenticate, friendsController.getStatus);
router.delete('/request/:publicId', authenticate, friendsController.removeRequest);
router.patch('/accept/:publicId', authenticate, friendsController.acceptRequest);
router.get('/notifications', authenticate, friendsController.getNotifications);
router.delete('/notifications/:id', authenticate, friendsController.dismissNotification);

export default router;