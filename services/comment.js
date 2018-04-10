
import BaseService from './base';


class CommentService extends BaseService {
	constructor() {
		super('comments');
    }
    deleteByPostId(post_id) {
        return this.knexModal.where('post_id', post_id).del();
    }
}

export default new CommentService();
