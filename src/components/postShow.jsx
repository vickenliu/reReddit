import React, {Component} from 'react'
import { Link } from "react-router";
import {getPostById} from '../reducer'
import { connect } from 'react-redux'

class Singlepost extends Component {

  render(){
    let post= getPostById(this.props.posts,this.props.params.id)
    let {title,votes,body,comments}=post
    return (
      <div>
        <Link to={`/`}>GO BACK</Link>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(
  mapStateToProps
)(Singlepost)
