import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from'passport';
import dotenv from'dotenv';

import comments from'./routes/comments';
import posts from'./routes/posts';
import AppService from './services';

// server render the first page with react+redux
import React from'react';
import {createStore} from'redux';
import {Provider} from'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './src/routes';
import reducer from './src/reducer';

dotenv.config();
const app = express();

app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: true, 
  saveUninitialized: true 
}));

AppService.applyPassportStrategy();
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
app.get('/init',function(req, res){
  var user={}
  if(req.session.passport){
    var info=req.session.passport.user
    user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
  }
  AppService.getInitial(function(response){
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
    result.currentUser=user;
    if(req.query.callback){
      res.send(req.query.callback+'('+ JSON.stringify(result) + ')' )
    }else{
      res.json(result)
    }
  })
})

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

app.get('*',async (req,res,next) => {
  const info = req.session.passport ? req.session.passport.user : null;
  let   user = info ? {
    id: info.id, 
    name: info.name,
    email: info.email,
    image: info.picture.data.url
  } : {};
  const currentRoute = routes.find(route => matchPath(req.url, route));
  if (!currentRoute) return;
  const initialData = (await currentRoute.component.fetchData()) || {};
  initialData.currentUser = user;
  const store = createStore(reducer, initialData);
  const context = {};
  let markUp = renderToString(
    <Provider store={store}>
    <StaticRouter context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
    </Provider>
  )

  res.render('layout', {user, initialData, markUp});
})



module.exports = app;
