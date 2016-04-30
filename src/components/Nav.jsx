import React, {Component} from 'react'
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux'

class Nav extends Component {

  render(){
    let logout,login,profile,newPost;
    if(this.props.currentUser.name){
      logout=<a href='/logout'>logout</a>
      profile=<Link to="profile">Profile</Link>
      newPost=<Link to='newpost'>New Post</Link>
    }else{
      login=<a href='/auth/facebook'>login</a>
    }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">Reddit- Wellington</IndexLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><IndexLink to="/">Posts</IndexLink></li>
              <li>{profile}</li>
              <li>{newPost}</li>
              <li>{login}{logout}</li>
            </ul>
          </div>
        </div>
      </nav>
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
