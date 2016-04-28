import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class Frontpage extends Component {

  render(){
    let {posts}= this.props
    let lists=[]
    posts.length>0? lists= posts.map((post) => {
        return <Post key={post.id} post={post} />
      }) : lists='no posts to show';
    return (
      <div className="frontpage">
        {lists}hi
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentUser:state.currentUser
  }
}
export default connect(
  mapStateToProps
)(Frontpage)
