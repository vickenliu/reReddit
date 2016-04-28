
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
	},
  findOrCreate:function(user){
    return knex('users').where('users.id',user.id).then(function(data){
      if(data.length>0){
        return true
      }else(
        knex('users').insert(user).then(function(){console.log('user saved')})
      )
    })
  },
  getInitial:function(cb){
    var response={}
      knex.select().table('posts').then(function(posts){
      response['posts']=posts
      knex.select().table('comments').then(function(comments){
        response.comments=comments
        cb(response)
      })

    })

  }
}
