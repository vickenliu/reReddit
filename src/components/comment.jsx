import React, {Component} from 'react'
import { connect } from 'react-redux'

class Comment extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let {title,body}=this.props
    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
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
