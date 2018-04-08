import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from'passport';

import comments from'./routes/comments';
import posts from'./routes/posts';
import {config} from 'dotenv';

config();

require('dotenv').config();

import AppService from './services';

// server render the first page with react+redux
const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;
import Promise from 'bluebird';

import ReactDOMServer from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import reducer        from './src/reducer'
import { createMemoryHistory, useQueries } from 'history';
import createRoutes   from './src/components/routes'

const app = express();
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

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

app.get('/init',function(req,res){
  var user={}
  if(req.session.passport){
    var info=req.session.passport.user
    user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
  }
  loadinitdata(function(result){
    result.currentUser=user || {}
    if(req.query.callback){
      res.send(req.query.callback+'('+ JSON.stringify(result) + ')' )
    }else{
      res.json(result)
    }

  })
})

function loadinitdata(cb){
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
    cb(result)
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
  let user={}
  if(req.session.passport){
    var info=req.session.passport.user
    user={id:info.id, name:info.name,email:info.email,image:info.picture.data.url}
  }
  let history= useQueries(createMemoryHistory)()
  let store= createStore(reducer)
  let routes= createRoutes(history)
  let location = history.createLocation(req.url)

  match({routes,location},(error,redirectLocation,renderProps)=>{
    //if location match a routes, run this call back
    function getReduxPromise(){
      let comp = renderProps.components[renderProps.components.length-1].WrappedComponent
      console.log('there is comp',comp)
      let promise = comp.fetchData ?
        comp.fetchData() : Promise.resolve();
      return Promise.resolve();
    }

    if(redirectLocation){
      console.log('redirectLocation')
      res.redirect(301,redirectLocation.pathname+redirectLocation.search);
    }else{
      // render the first page.
      const requrl = location.pathname+location.search
      let [currentUrl, unsubscribe]= checkUrl()
      getReduxPromise().then(()=>{
        let currentUser =user.name? {currentUser:user} : {}
        let reduxState = Object.assign({},store.getState(),currentUser)
        reduxState= escape(JSON.stringify(reduxState))
          let content= ReactDOMServer.renderToString(
            <Provider store={store}>
              {<RouterContext {...renderProps} />}
            </Provider>
          )
          if(currentUrl()===requrl){
            user? res.render('layout',{user,content,reduxState}) : res.render('layout',{content,reduxState})
          }else{
            res.redirect(302,currentUrl())
          }
      }).catch((err)=> {
        console.log('ther eis a error')
        unsubscribe();
        next(err);
      });
    }
  })
  function checkUrl(){
    let currentUrl = location.pathname+location.search
    // let unsubscribe= history.listen((newc)=>{
    //   if (newc.action === 'PUSH') {
    //       currentUrl= newc.pathname+newc.search
    //   }
    // })
    return [
      () => currentUrl,
      ()=> 'unsubscribe'
    ]
  }
})

// app.use(function(req,res){
//     res.redirect('/')
//
// })



module.exports = app;
