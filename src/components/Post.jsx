import React, {Component} from 'react'

import { Link } from "react-router";
import { connect } from 'react-redux'
import { increment, decrement, showLogin} from '../actions/'


class Post extends Component {

  logThis() {
    console.log(this.props.posts)
  }

  increment() {
    let {currentUser,showlogin,post,dispatch}=this.props
    currentUser.name?
        dispatch(increment(post)) :
        dispatch(showLogin());
  }

  decrement() {
    let {currentUser,showlogin,post,dispatch}=this.props
    currentUser.name?
        dispatch(decrement(post)) :
        dispatch(showLogin());
  }


  render(){
    let {title,body,comments,id,votes}=this.props.post
    return (
      <div className='row eachpost'>
        <div className='col-md-1 votingbtn'>
          <button onClick={this.increment.bind(this)} className='votebtn'><span className="glyphicon glyphicon-hand-up" aria-hidden="true"></span></button>
          <button onClick={this.decrement.bind(this)} className='votebtn'><span className="glyphicon glyphicon-hand-down" aria-hidden="true"></span></button>
          <span className='voteCount'>{votes}_votes</span>
        </div>
        <div className='col-md-10'>
          <h3><Link to={`/posts/${Number(id)}`} onClick={this.increment.bind(this)}>{title}</Link></h3>
          <p>{body.substring(0,100)+'...'}</p>
          {comments.length<=0? <span>be the first one to comment</span> : comments.length>1? <span className="badge">{comments.length} comments</span> : <span className="badge">{comments.length} comment</span>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentUser:state.currentUser
  }
}
export default connect(
  mapStateToProps
)(Post)
