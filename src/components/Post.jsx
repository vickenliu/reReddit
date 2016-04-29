import React, {Component} from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/'
import Comment from './Comment'

class Post extends Component {
  constructor(props){
    super(props)
  }

  increment() {
    this.props.dispatch(increment(this.props.post))
  }

  decrement() {
    this.props.dispatch(decrement(this.props.post))
  }

  loggy(x, i) {
    console.log(x, i)
  }

  render(){
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <p>{this.props.post.votes}</p>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
        <div className="comments">
          {this.props.comments.map( comment =>
            <Comment key={comment.id}
                     user={comment.user_id}
                     content={comment.content} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentUser: state.currentUser
  }
}

export default connect(
  mapStateToProps
)(Post)
