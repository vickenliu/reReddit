import express from 'express';
import commentsCtrl from '../controllers/commentsCtrl';
import AuthCtrl from '../controllers/auth';
const router = express.Router();
/* create a new post. */
router.post('/', AuthCtrl.isLoggedIn, commentsCtrl.addOne);

router.delete('/:id', AuthCtrl.isLoggedIn, commentsCtrl.removeOne);

export default router;
