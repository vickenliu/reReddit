import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class Frontpage extends Component {

  render(){
    let {posts}= this.props.posts
    console.log(posts,'in frontpage')
    return (
      <div className="frontpage">
        {
          posts.map((post) => {
          return <Post key={post.id} post={post} />
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(
  mapStateToProps
)(Frontpage)
