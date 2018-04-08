
import BaseService from './base';


class UserService extends BaseService {
	constructor() {
		super('users');
    }
    findOrCreate(user) {
        const self = this;
        const id = user.id;
        
        return self.getOneById(id).then(function(data){
          if(data.length>0){
            return true
          }else(
            self.addOne(user).then(function(){console.log('user saved')})
          )
        });
    }
}

export default new UserService();
