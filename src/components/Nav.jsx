import React, {Component} from 'react'
import Login from './login'

class Nav extends Component {

  render(){
    return (
      <div className="navbar">
        <h1>THIS IS NAVBAR</h1>
        <Login />
      </div>
    )
  }
}

export default Nav
