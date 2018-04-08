import express from 'express';
import commentsCtrl from '../controllers/commentsCtrl';
const router = express.Router();
/* create a new post. */
router.post('/', commentsCtrl.addOne);

router.delete('/:id', commentsCtrl.removeOne);

export default router;
