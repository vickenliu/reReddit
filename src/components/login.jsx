import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fbLogin} from '../actions'
import request from 'superagent'

class Login extends Component {


  render(){
    return (
      <div>
        <a href="/auth/facebook">facebook</a>
      </div>
    )
  }
}

export default Login
