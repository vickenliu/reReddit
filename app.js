var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var comments = require('./routes/comments');
var posts = require('./routes/posts');
var passport= require('passport')

require('dotenv').config();
var app = express();
var db= require('./db/db')

// server render the first page with react+redux
var React = require('react');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
import Promise from 'bluebird';

import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import reducer        from './src/reducer'
import { createMemoryHistory, useQueries } from 'history';
import createRoutes   from './src/components/routes'
import passportFns    from'./routes/oauth'

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
  loadinitdata(function(result,users){
    result.users= users
    result.currentUser=user || {}
    res.json(result)
  })
})

function loadinitdata(cb){
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
    cb(result,response.users)
  })
}

app.get('/logout', function (req, res) {
	req.session.destroy();
  res.redirect('/')
})

app.get('/auth/facebook',
   passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/')
});

app.get('*',(req,res,next)=>{
  let history= useQueries(createMemoryHistory)()
  let store= createStore(reducer)
  let routes= createRoutes(history)
  let location = history.createLocation(req.url)

  match({routes,location},(error,redirectLocation,renderProps)=>{
    // if location match a routes, run this call back
    function getReduxPromise(){
      let comp = renderProps.components[renderProps.components.length-1].WrappedComponent
      let promise = comp.fetchData ?
        comp.fetchData(store) : Promise.resolve();
      return promise
    }

    if(redirectLocation){
      res.redirect(301,redirectLocation.pathname+redirectLocation.search);
    }else{
      // render the first page.
      const requrl = location.pathname+location.search
      let [currentUrl, unsubscribe]= checkUrl()
      getReduxPromise().then(()=>{
        loadinitdata(function(data,users){
          data.users= users
          data.currentUser=user || {}
          let reduxState= escape(JSON.stringify(data))
          let html= ReactDOMServer.renderToString(
            <Provider store={store}>
              {<RouterContext {...renderProps} />}
            </Provider>
          )
          if(currentUrl()===requrl){
            var user
            if(req.session.passport){
              var info= req.session.passport.user
              user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
            }
            user? res.render('layout',{user,html,reduxState}) : res.render('layout',{html,reduxState})
          }else{
            res.redirect(302,currentUrl())
          }
        })
      }).catch((err)=> {
        unsubscribe();
        next(err);
      });
    }
  })
  function checkUrl(){
    let currentUrl = location.pathname+location.search
    let unsubscribe= history.listen((location)=>{
      currentUrl= location.pathname+location.search
    })
    return [
      () => currentUrl,
      unsubscribe
    ]
  }
})

app.use(function(req,res){
    res.redirect('/')

})



module.exports = app;
