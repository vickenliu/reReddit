import React from 'react'
import {render} from 'react-dom'
//import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import { Provider } from 'react-redux'
import request from 'superagent'
import reducer from './reducer'
import { createStore,combineReducers } from 'redux'
import {initialState} from './actions'
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore} from 'react-router-redux'

import Frontpage from './components/Frontpage'
import Profile from './components/profile'

const store = createStore(
    reducer
)

const history = syncHistoryWithStore(browserHistory, store)

function getInitData(cb){
  request.get('/init')
         .end(function(err,data){
           data=JSON.parse(data.text)
           store.dispatch(initialState(data))
         })
}

document.addEventListener("DOMContentLoaded", function() {
  getInitData()

  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Frontpage}></IndexRoute>
          <Route path="profile" component={Profile}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
});
