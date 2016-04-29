import React, {Component} from 'react'

import { Link } from "react-router";
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/'


class Post extends Component {
  constructor(props){
    super(props)
  }

  logThis() {
    console.log(this.props.posts)
  }

  increment() {
    this.props.dispatch(increment(this.props.post))
  }

  decrement() {
    this.props.dispatch(decrement(this.props.post))
  }


  render(){
    let {title,body,comments,id,votes}=this.props
    let commentsList= comments.map(comment=>{
      return <Comment {...comment} />
    })
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
