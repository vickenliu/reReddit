
import config from'../knexfile';
const knex= require('knex')(config[process.env.NODE_ENV || 'development']);

export default class BaseService {
    constructor (name){
        this.modal = name;
        this.knexModal = knex(this.modal);
    }
	getAll(){
		return knex.select().table(this.modal)
    }
    getOneById(id) {
        return knex(this.modal).where('id', '=', id)
    }
	updateItemById(id, info){
		return knex(this.modal).where('id', '=', id).update(info)
	}
	deleteItemById(id){
		return knex(this.modal).where('id', id).del()
	}
	addOne(info){
		return knex(this.modal).insert(info)
	}
}
