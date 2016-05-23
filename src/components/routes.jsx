import React, {Component} from 'react'
import { render }         from 'react-dom'

import { Router, Route, IndexRoute } from "react-router";
import App          from './App'
import Frontpage    from './Frontpage'
import Profile      from './profile'
import Singlepost   from './postShow'
import Newpost      from './newPost'

export default (history)=>{
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Frontpage}></IndexRoute>
          <Route path="posts/:id" component={Singlepost}></Route>
          <Route path="profile" component={Profile}></Route>
          <Route path='newpost' component={Newpost}></Route>
        </Route>
      </Router>
    )
}
