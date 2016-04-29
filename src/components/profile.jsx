import React, {Component} from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  render(){
    let {name,email}= this.props.currentUser
    return (
      <div className="navbar">
        <h1>this is my profile</h1>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser:state.currentUser
  }
}
export default connect(
  mapStateToProps
)(Profile)
