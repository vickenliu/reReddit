
var config= require('../knexfile')
var knex= require('knex')(config[process.env.NODE_ENV || 'development'])

module.exports={
	getAll:function(table){
		return knex.select().table(table)
	},
	updateItem: function(table,id,info){
		return knex(table).where('id','=',id).update(info)
	},
	deleteItem: function(table,id){
		return knex(table).where('id',id).del()
	},
	addOne: function(table,info){
		return knex(table).insert(info)
	},
	deletePostsComments:function(post_id){
		return knex('comments').where('post_id',post_id).del()
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
  getInitial:function(){
		return new Promise((resolve, reject) => {
			Promise.all([
				knex.select().table('posts'),
				knex.select().table('comments')
			]).then(([ posts, comments ]) => {
				resolve({posts, comments})
			}).catch((err) => {
				reject(err)
			})
		})

    // var response={}
    //   knex.select().table('posts').then(function(posts){
    //   response['posts']=posts
	  //     knex.select().table('comments').then(function(comments){
	  //       response.comments=comments
		// 			knex.select().table('users').then(function(users){
		// 				response.users=users
		// 				cb(response)
		// 			})
		//
	  //     })
		//
    // })

  }
}
