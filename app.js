var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var comments = require('./routes/comments');
var posts = require('./routes/posts');
var passport= require('passport')
var Strategy = require('passport-facebook').Strategy;
require('dotenv').config();
var app = express();
var db= require('./db/db')

var React = require('react');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var reducer = require('./src/reducer')
var passportFns =  require('./routes/oauth')

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

passportFns(passport,db)

app.use(passport.initialize());
app.use(passport.session());


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/comments', comments);
app.use('/posts', posts);

app.get('/init',function(req,res){
  var user={}
  if(req.session.passport){
    var info=req.session.passport.user
    user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
  }
  db.getInitial(function(response){
    var result={}
    result.posts= response.posts.map(function(post){
      post.comments=[]
      response.comments.forEach(function(comment){
        if(comment.post_id === post.id)
          post.comments.push(comment)
      })
      return post
    })
      result.users= response.users
      result.currentUser=user || {}


    res.json(result)
  })
})

app.get('/logout', function (req, res) {
	req.session.destroy();
  res.redirect('/')
})

app.get('/', function (req, res) {
  var user
  if(req.session.passport){
    var info= req.session.passport.user
    user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
  }
  user? res.render('layout',{user}) : res.render('layout')
})

app.get('/auth/facebook',
   passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
});


app.use(function(req,res){
    res.redirect('/')

})



module.exports = app;
