import React        from 'react'
import { render }   from 'react-dom'
//import {Router, Route, hashHistory} from 'react-router'

import { Provider }     from 'react-redux'
import reducer          from './reducer'

import { createStore }  from 'redux'
import { syncHistoryWithStore}   from 'react-router-redux'
import { browserHistory } from "react-router";

import createRoutes     from './components/routes'

import {initialState}   from './actions'
import { fetchInitData } from './actions/helpers'
console.log('what is wrong');
let reduxState;
(async function (){
  console.log('---', reduxState);
  try {
    if (false && window.__REDUX_STATE__) {
        reduxState = JSON.parse(unescape(__REDUX_STATE__));
    } else {
      reduxState = await fetchInitData();
      if (store && store.dispatch) store.dispatch(initialState(reduxState));
    }
  } catch (e) {
    // dispatch a error event.
  }
  
})()


const store = createStore(reducer,reduxState)
console.log('new state', store.getState())

document.addEventListener("DOMContentLoaded", function() {
  let history = syncHistoryWithStore(browserHistory, store)
  render(
    <Provider store={store}>
     {createRoutes(history)}
    </Provider>,
    document.getElementById('app')
  )
});
