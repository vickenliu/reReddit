import React, {Component} from 'react'
import { render }         from 'react-dom'

import { Router, Route, IndexRoute } from "react-router";
import App          from './components/App'
import Frontpage    from './components/Frontpage'
import Profile      from './components/profile'
import Singlepost   from './components/postShow'
import Newpost      from './components/newPost'

export default (history) => {
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
