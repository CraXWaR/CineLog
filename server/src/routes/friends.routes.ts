import {Router} from 'express';
import {FriendsController} from "../controllers/friends.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const friendsController = new FriendsController();

router.get('/get-friends/:publicId', friendsController.getFriends);
router.get('/status/:publicId', authenticate, friendsController.getStatus);
router.post('/request', authenticate, friendsController.sendRequest);
router.delete('/request/:publicId', authenticate, friendsController.removeRequest);
router.patch('/accept/:publicId', authenticate, friendsController.acceptRequest);
router.delete('/:publicId', authenticate, friendsController.removeFriend);



export default router;