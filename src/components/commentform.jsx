import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addNewComment} from '../actions'

class CommentForm extends Component {
  handleComment(e){
    e.preventDefault()
    let newComment= this.refs.comment.value
    let {addComment,post_id,currentUser}= this.props
    addComment({post_id,content:newComment,user_id:currentUser.id})
    this.refs.comment.value=''
  }

  render(){
    return (<div>{!this.props.currentUser.name? <h3>Please Login to comment...</h3> :
        <form onSubmit={this.handleComment.bind(this)}>
          <div className="form-group">
            <textarea className="form-control" rows="3" ref='comment' required></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
  }</div>)
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser:state.currentUser
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addComment:(comment)=>{
      dispatch(addNewComment(comment))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
