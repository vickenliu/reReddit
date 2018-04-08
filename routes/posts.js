import express from 'express';
import postsCtrl from '../controllers/postsCtrl';
const router = express.Router();

/* GET home page. */
router.post('/', postsCtrl.addOne);

router.delete('/:id', postsCtrl.removeOne);

router.post('/:id', postsCtrl.updateById);

export default router;
