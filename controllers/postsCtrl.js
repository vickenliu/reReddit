import postService from '../services/post';
import commentService from '../services/comment';

class PostCtrl {
    addOne(req, res, next) {
        postService.addOne(req.body)
                   .then(() => res.send('ok'));
    }
    removeOne(req, res, next) {
        const id = req.params.id;

        commentService.deleteByPostId(id).then(()=> {
            postService.deleteItemById(id).then(() => res.json('confirmed'))
        })
    }
    updateById(req, res, next) {
        postService.updateItemById(req.params.id, req.body)
                   .then(() => res.json('confirmed'))
    }
}

export default new PostCtrl();