import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addNewPost} from '../actions'


class Newpost extends Component {
  handleSubmit(e){
    e.preventDefault()
    let body= this.refs.body.value,
        title= this.refs.title.value;
    let {addPost,currentUser,relacate}= this.props
    addPost({body,title,votes:0,user_id:currentUser.id})
    this.props.history.push('/')
  }

  render(){
    return (
    <div className='col-md-6 col-md-offset-3'>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" ref="title" id="title" placeholder="Title" required/>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="7" ref='body' required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser:state.currentUser
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addPost:(comment)=>{
      dispatch(addNewPost(comment))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newpost)
