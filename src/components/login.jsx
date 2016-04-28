import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fbLogin} from '../actions'
import request from 'superagent'

class Login extends Component {


  clickfbLogin(){
    // let trig= this.props.dispatch
    // request.get('/currentUser')
    //        .end((err,data)=>{
    //          console.log(data,'after login')
    //          trig(fbLogin(data))
    //        })
  }
  render(){
    return (
      <div>
        <a href="/auth/facebook" onClick={this.clickfbLogin.bind(this)}>facebook</a>
      </div>
    )
  }
}

export default connect()(Login)
