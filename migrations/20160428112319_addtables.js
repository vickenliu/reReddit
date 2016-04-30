exports.up = function(knex, Promise) {
  return Promise.all([
  		knex.schema.createTableIfNotExists('posts', function (table) {
		  table.increments(); // id
		  table.string('title');
		  table.text('body');
		  table.string('user_id');
		  table.integer('votes');
		  table.timestamps();
		}),
		knex.schema.createTableIfNotExists('comments', function (table) {
		  table.increments();
		  table.string('user_id');
      table.integer('post_id');
		  table.string('content');
		  table.integer('votes');
		  table.timestamps();
		}),
    knex.schema.createTableIfNotExists('users', function (table) {
      table.string('id');
      table.string('name');
      table.string('email');
      table.timestamps();
    })
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('posts'),
  	knex.schema.dropTable('comments'),
    knex.schema.dropTable('users')
  ])
};
