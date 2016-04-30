import React, {Component} from 'react'
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render(){
    let {location}= this.props
    let indexActive=location.pathname==='/'? 'active' : ''
    let postActive=location.pathname.match(/^\/posts/)? 'active' : ''
    let profileActive=location.pathname==='profile'? 'active' : ''
    let newActive=location.pathname==='newpost'? 'active' : ''

    let logout,login,profile,newPost;
    if(this.props.currentUser.name){
      logout=<a href='/logout' onClick={this.toggleCollapse.bind(this)}>logout</a>
      profile=<Link to="profile" onClick={this.toggleCollapse.bind(this)}>Profile</Link>
      newPost=<Link to='newpost' onClick={this.toggleCollapse.bind(this)}>New Post</Link>
    }else{
      login=<a href='/auth/facebook' onClick={this.toggleCollapse.bind(this)}>login</a>
    }
    const navClass = this.state.collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={this.toggleCollapse.bind(this)} data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">Reddit- Wellington</IndexLink>
          </div>

          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={indexActive || postActive}><IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Posts</IndexLink></li>
              <li className={profileActive}>{profile}</li>
              <li className={newActive}>{newPost}</li>
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
