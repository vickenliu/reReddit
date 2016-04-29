import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getItemById} from '../reducer'

class Comment extends Component {

  render(){
    let {content,user_id}=this.props
    let commenter= getItemById(this.props.users,user_id)
    console.log(commenter)
    return (
      <div>
        <h3>{commenter? commenter.name : ' '}</h3>
        <p>{content}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(
  mapStateToProps
)(Comment)
