import React, {Component} from 'react'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import routes from '../routes';

class App extends Component {
  render(){
    const currentUser = Object.keys(this.props.currentUser).length? this.props.currentUser : null;
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Reddit- Wellington</Link>
            </div>

            <div className='navbar-collapse' id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Posts</Link></li>
                {currentUser ? <li><Link to="/profile">Profile</Link></li> : ''}
                {currentUser ? <li><Link to="/newpost">Create Post</Link></li> : ''}
                {currentUser ? <li><a href='/logout'>Logout</a></li> : <li><a href='/auth/facebook'>Login</a></li>}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid route-content">
          <switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </switch>
        </div>  
      </React.Fragment>
    )
  }
}

export default App
