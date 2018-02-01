import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getItemById} from '../reducer'

class Comment extends Component {
  render(){
    let {content,user_id}=this.props
    let commenter= getItemById(this.props.users,user_id)
    console.log(commenter)
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h4>{commenter? commenter.name : 'someone'}<small> says:</small></h4>
        </div>
        <div className="panel-body">
          <p>{content}</p>
        </div>
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
