import React, {Component} from 'react'
import { Link } from "react-router";
import {getPostById} from '../reducer'
import { connect } from 'react-redux'
import Comment from './comment'

class Singlepost extends Component {

  render(){
    let post= getPostById(this.props.posts,this.props.params.id)
    let {title,votes,body,comments}=post
    let commentsList= comments.map((comment,i)=>{
      if(comment){
        return <Comment {...comment} key={i} />
      }
    })
    return (
      <div>
        <Link to={`/`}>GO BACK</Link>
        <h1>{title}</h1>
        <p>{body}</p>
        <br/>
        <div>
          {commentsList}
        </div>
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
