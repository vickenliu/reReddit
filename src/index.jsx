import React        from 'react'
import { render }   from 'react-dom'
//import {Router, Route, hashHistory} from 'react-router'

import { Provider }     from 'react-redux'
import reducer          from './reducer'

import { createStore }  from 'redux'
import { syncHistoryWithStore}   from 'react-router-redux'
import { browserHistory } from "react-router";

import createRoutes     from './components/routes'

let reduxState;
if (window.__REDUX_STATE__) {
  try {
    reduxState = JSON.parse(unescape(__REDUX_STATE__));
  } catch (e) {
  }
}

const store = createStore(reducer,reduxState)


document.addEventListener("DOMContentLoaded", function() {
  let history = syncHistoryWithStore(browserHistory, store)
  render(
    <Provider store={store}>
     {createRoutes(history)}
    </Provider>,
    document.getElementById('app')
  )
});
