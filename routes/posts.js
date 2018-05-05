import express from 'express';
import postsCtrl from '../controllers/postsCtrl';
import AuthCtrl from '../controllers/auth';
const router = express.Router();

/* GET home page. */
router.post('/', AuthCtrl.isLoggedIn, postsCtrl.addOne);

router.delete('/:id', AuthCtrl.isLoggedIn, postsCtrl.removeOne);

router.post('/:id', AuthCtrl.isLoggedIn, postsCtrl.updateById);

export default router;
