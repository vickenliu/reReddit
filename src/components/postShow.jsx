import React, {Component} from 'react'
import { Link } from "react-router";
import {getItemById} from '../reducer'
import { connect } from 'react-redux'
import Comment from './comment'
import CommentForm from './commentform'

class Singlepost extends Component {

  render(){
    let post= getItemById(this.props.posts,this.props.params.id)
    let {title,votes,body,comments,user_id,id}=post
    let author= getItemById(this.props.users,user_id)
    let commentsList= comments.map((comment,i)=>{
      if(comment){
        return <Comment {...comment} key={i} />
      }
    })
    return (
      <div className='col-md-8 col-md-offset-2'>
        <div className="jumbotron">
          <div className="container">
            <h2>{title}  <small>by_{author.name}</small></h2>
            <p>{body}</p>
            <p><Link to={`/`} className='btn btn-primary btn-lg pull-right'>GO BACK</Link></p>
          </div>
        </div>
        <CommentForm post_id={id}/>
        <div>
          {commentsList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users:state.users
  }
}
export default connect(
  mapStateToProps
)(Singlepost)
