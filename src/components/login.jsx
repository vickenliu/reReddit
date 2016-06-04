import React,{Component} from 'react'


export default class Login extends Component{
  hidelogin(){
    this.props.hidelogin()
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
