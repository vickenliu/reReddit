import postService from '../services/post';
import commentService from '../services/comment';
import policyService from '../services/policy';

class PostCtrl {
    addOne(req, res, next) {
        postService.addOne(req.body)
                   .then(() => res.send('ok'))
                   .catch(err => next(err));
    }
    removeOne(req, res, next) {
        const id = req.params.id;
        
        postService.getOneById(id).then((post) => {
            if (!policyService) next(new Error('you are not allowed to remove this post'));
            return true; 
        }).then((isUserAllowed) => {
            commentService.deleteByPostId(id).then(()=> {
                postService.deleteItemById(id).then(() => res.json('confirmed'))
                                              .catch(err => next(err));
            }).catch(err => next(err));
        }).catch(error => next(error));
    }
    updateById(req, res, next) {
        postService.updateItemById(req.params.id, req.body)
                   .then(() => res.json('confirmed'))
                   .catch(err => next(err));
    }
}

export default new PostCtrl();