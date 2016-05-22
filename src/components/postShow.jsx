import React, {Component} from 'react'
import { Link } from "react-router";
import {getItemById} from '../reducer'
import { connect } from 'react-redux'
import Comment from './comment'
import CommentForm from './commentform'
import {deletePost} from '../actions'
import {fetchInitData}  from '../actions/helpers'

class Singlepost extends Component {
  static fetchData(store){
    return fetchInitData(store)
  }
  handleDelete(id){
    this.props.deletepost(this.props.params.id)
     this.props.history.push('/')
  }

  render(){
    console.log('client side',this.props)
    if(this.props.posts.length<=0){
      return (
        <p>loading</p>
      )
    }
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
            <p>
            {user_id==this.props.currentUser.id?
              <button onClick={this.handleDelete.bind(this)} className='btn btn-danger pull-right'>Delete</button> : ''}
            <Link to={`/`} className='btn btn-primary pull-right'>ALL POSTS</Link></p>
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
    users:state.users,
    currentUser:state.currentUser
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    deletepost:(id)=>{
      dispatch(deletePost(id))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Singlepost)
