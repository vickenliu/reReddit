
var config= require('../knexfile')
var knex= require('knex')(config[process.env.NODE_ENV || 'development'])

module.exports={
	getAll:function(table){
		return knex.select().table(table)
	},
	updateKP: function(table,id,info){
		return knex(table).where('tagid','=',id).update(info)
	},
	deleteKP: function(table,id){
		return knex(table).where('tagid',id).del()
	},
	addOne: function(table,info){
		return knex(table).insert(info)
	}
}
