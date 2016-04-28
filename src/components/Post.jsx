import React, {Component} from 'react'
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
    // console.log(increment)
    this.props.dispatch(increment(this.props.post))
  }

  decrement() {
    this.props.dispatch(decrement(this.props.post))
  }


  render(){
    console.log(this.props)
    return (
      <div>
        <h3 onClick={this.logThis.bind(this)}>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <p>{this.props.post.votes}</p>
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
