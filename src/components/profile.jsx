import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router";
import {fetchInitData}  from '../actions/helpers'

class Profile extends Component {
  static fetchData(store){
    return fetchInitData(store)
  }
  render(){
    let {name,email,id,image}= this.props.currentUser
    let myPosts= this.props.posts.filter((post)=>{
      return post.user_id == id
    })

    return (
      <div className="col-md-6 col-md-offset-3">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src={image} alt="avatar"/>
            </a>
          </div>
          <div class="media-body">
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
          </div>
        </div>
        <h3>Recent Posts:</h3>
        <ul>
          {myPosts.map((post,i)=>{
            return <li key={i}><Link to={`posts/${Number(post.id)}`}>{post.title}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser:state.currentUser,
    posts: state.posts
  }
}
export default connect(
  mapStateToProps
)(Profile)
