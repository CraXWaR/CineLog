import {Router} from 'express';
import {NotificationController} from "../controllers/notification.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = Router();
const notificationController = new NotificationController();

router.get('/', authenticate, notificationController.getNotifications);
router.delete('/:id', authenticate, notificationController.dismissNotification);

export default router;