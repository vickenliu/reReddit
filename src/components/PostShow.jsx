import React, {Component} from 'react'
import Comment from './comment'
import { IndexLink } from "react-router";
import { connect } from 'react-redux'
// import {getPostById} from '../reducer'

class Singlepost extends Component {

  render(){
    let {title,body,comments}=this.props
    let id= this.props.params.id
        // post= getPostById(this.props.posts,id);
    // console.log('thisis post',post)
    return (
      <div>
        <IndexLink to="/">GO BACK</IndexLink>
        <h1>sginle post</h1>
        <h3>{title}</h3>
        <p>{body}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentUser:state.currentUser,
    users: state.users
  }
}
export default connect(
  mapStateToProps
)(Singlepost)
