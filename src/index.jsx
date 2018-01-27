import React        from 'react'
import { render }   from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom';
//import {Router, Route, hashHistory} from 'react-router'

import { Provider }     from 'react-redux'
import reducer          from './reducer'

import { createStore }  from 'redux'
import { syncHistoryWithStore}   from 'react-router-redux'

import App from './components/App';

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
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
});
