import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class Frontpage extends Component {

  render(){
    console.log(this.props)
    return (
      <div className="frontpage">
        {
          this.props.posts.posts.map((post) => {
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
