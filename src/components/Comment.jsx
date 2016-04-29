import React, {Component} from 'react'

class Comment extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <h3>Comment UserID: {this.props.user}</h3>
        <p>Comment content: {this.props.content}</p>
      </div>
    )
  }
}

export default Comment
