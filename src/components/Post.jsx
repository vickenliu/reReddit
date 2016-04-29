import React, {Component} from 'react'

import { Link } from "react-router";
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/'


class Post extends Component {

  logThis() {
    console.log(this.props.posts)
  }

  increment() {
    this.props.dispatch(increment())
  }

  decrement() {
    this.props.dispatch(decrement(id))
  }


  render(){
    let {title,body,comments,id,votes}=this.props.post
    return (
      <div>
        <Link to={`posts/${Number(id)}`}>{title}</Link>
        <p>{body}</p>
        <p>{votes}</p>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
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
)(Post)
