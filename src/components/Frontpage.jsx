import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import _ from 'lodash'

class Frontpage extends Component {

  render(){

    let {posts}= this.props
    let lists=[]
    let sorted = _.sortBy(posts, e => e.votes).reverse()
    posts.length>0? lists= sorted.map((post) => {
        return <Post key={post.id} {...post} />
      }) : lists='no posts to show';
    return (
      <div className="frontpage">
        {lists}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentUser:state.currentUser,
    users: state.users
  }
}
export default connect(
  mapStateToProps
)(Frontpage)
