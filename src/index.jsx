import React        from 'react'
import { render }   from 'react-dom'
//import {Router, Route, hashHistory} from 'react-router'

import { Provider }     from 'react-redux'
import request          from 'superagent'
import reducer          from './reducer'

import { createStore }  from 'redux'
import {initialState}   from './actions'

import Routes           from './components/routes'

const store = createStore(reducer)

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
      <Routes store={store}/>
    </Provider>,
    document.getElementById('app')
  )
});
