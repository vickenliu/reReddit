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

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


passport.use(new Strategy({
    clientID: process.env.FB_APPID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: "https://re-reddit.herokuapp.com/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
      var info=profile._json
      var user={id:info.id.toString(),
                name:info.name,
                email:info.email}
      db.findOrCreate(user)
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
	// console.log('accessToken',accessToken)
	// console.log('refreshToken',refreshToken)
	return cb(null,profile._json)

  }
));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

var db= require('./db/db')
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
  var info= req.session.passport.user
  var user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
  user? res.render('layout',{user}) : res.render('layout')
})

app.get('/auth/facebook',
   passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.redirect('/')
    // res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.redirect('/')
  // res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
});


module.exports = app;
