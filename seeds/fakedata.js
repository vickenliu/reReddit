
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(), knex('comments').del(), knex('users').del(),

    // Inserts seed entries
    knex('posts').insert({id: 1, title: 'this place is niece', body: 'stomehinglsdjkd', user_id: 1, votes: 2}),
    knex('posts').insert({id: 2, title: 'this fdf is gfg', body: 'stomehlsdjkd', user_id: 2, votes: 4}),
    knex('posts').insert({id: 3, title: 'thisdfsfsf gfg', body: 'gfgfdghhjk', user_id: 4, votes: 7}),
    knex('posts').insert({id: 4, title: 'thisdfee4566sfsf gfg', body: 'gfgfdghhjk', user_id: 2, votes: 7}),

    knex('users').insert({id: 1, name: 'Lucy', email: 'fake@ch.com'}),
    knex('users').insert({id: 2, name: 'James', email: 'fake45@ch.com'}),
    knex('users').insert({id: 3, name: 'Dunk', email: 'fak34e@ch.com'}),


    knex('comments').insert({id: 1, user_id: 1, post_id: 1,content:'i like it',votes:1}),
    knex('comments').insert({id: 2, user_id: 2, post_id: 1,content:'i like it',votes:1}),
    knex('comments').insert({id: 3, user_id: 4, post_id: 3,content:'i like it',votes:5})
  );
};
