import React, {Component} from 'react'
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux'

class Nav extends Component {

  render(){
    let logout,login,profile;
    if(this.props.currentUser.name){
      logout=<a href='/logout'>logout</a>
      profile=<Link to="profile">Profile</Link>
    }else{
      login=<a href='/auth/facebook'>login</a>
    }

    return (
      <div className="navbar">
        <h1>THIS IS NAVBAR</h1>
        <IndexLink to="/">Posts</IndexLink>
        {profile}
        {logout}
        {login}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser:state.currentUser
  }
}
export default connect(
  mapStateToProps
)(Nav)
