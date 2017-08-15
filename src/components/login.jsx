import React,{Component} from 'react'
import { connect } from 'react-redux'
import { hideLogin} from '../actions/'

export class Login extends Component{
  hidelogin(){
    this.props.dispatch(hideLogin())
  }
  render(){
    return(
      <div id='fblogin'>
        <button onClick={this.hidelogin.bind(this)}>CLOSE</button>
        <a a href='/auth/facebook' role='button' disabled='true'>
          <img src='http://res.cloudinary.com/vicken/image/upload/r_0/v1465009371/personal/fb_login.png' />
        </a>
      </div>
    )
  }
}

export default connect(
)(Login)
