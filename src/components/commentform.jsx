import React, {Component} from 'react'
import { connect } from 'react-redux'

class CommentForm extends Component {
  render(){
    console.log(this.props.currentUser)
    return (<div>{!this.props.currentUser.name? <h3>'Please Login to comment...'</h3> :
        <form>
          <div className="form-group">
            <textarea className="form-control" rows="3"></textarea>
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
export default connect(
  mapStateToProps
)(CommentForm)
