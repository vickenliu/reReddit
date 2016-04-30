
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(), knex('comments').del(), knex('users').del(),

    // Inserts seed entries
    knex('posts').insert({id: 1, title: 'Pokemon Go Beta', body: "Who got access to the beta testing for Pokemon Go? I've played a little bit over the last day and still have no idea what I'm doing (it probably doesn't help that I dropped out of Ingress at level 4). It seems like there's a fair few people playing on the streets of Wellington though.", user_id: 1, votes: 2}),
    knex('posts').insert({id: 2, title: 'Miramar, WTF was that?', body: "Rattle of 'gunfire' followed by rumbling. Stone St working overtime tonight?", user_id: 2, votes: 4}),
    knex('posts').insert({id: 3, title: 'Golf courses for novices', body: "Can any one recommend any golf courses in the area which are fine having beginners playing? Ideally somewhere that offers club hire too.", user_id: 2, votes: 7}),
    knex('posts').insert({id: 4, title: 'Furry thief stalking Tawa streets', body: 'Tawa residents should keep an eye out for a grey-haired criminal of slim build in connection with a string of recent insulation pipe robberies.', user_id: 2, votes: 7}),

    knex('users').insert({id: 1, name: 'Lucy', email: 'fake@ch.com'}),
    knex('users').insert({id: 2, name: 'James', email: 'fake45@ch.com'}),
    knex('users').insert({id: 3, name: 'Dunk', email: 'fak34e@ch.com'}),


    knex('comments').insert({id: 1, user_id: 1, post_id: 1,content:'i like it',votes:1}),
    knex('comments').insert({id: 2, user_id: 2, post_id: 1,content:'i like it also',votes:1}),
    knex('comments').insert({id: 3, user_id: 4, post_id: 3,content:'i like it sure',votes:5})
  );
};
