// @ts-check
import commentService from '../services/comment';

class CommentCtrl {
    addOne(req, res, next) {
        commentService.addOne(req.body)
                   .then(() => res.send('ok'))
                   .catch(err => next(err));
    }
    removeOne(req, res, next) {
        const id = req.params.id;

        commentService.deleteByPostId(id)
                      .then(()=> res.json('confirmed'))
                      .catch(err => next(err));
    }
}

export default new CommentCtrl();