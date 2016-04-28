import React, {Component} from 'react'
import { IndexLink, Link } from "react-router";

class Nav extends Component {

  render(){
    return (
      <div className="navbar">
        <h1>THIS IS NAVBAR</h1>
        <IndexLink to="/">Posts</IndexLink>
        <Link to="profile">Profile</Link>
      </div>
    )
  }
}

export default Nav
