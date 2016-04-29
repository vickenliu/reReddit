import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import _ from 'lodash'

class Frontpage extends Component {

  render(){
    let { posts }= this.props.posts
    let sorted = _.sortBy(posts, e => e.votes).reverse()

    return (
      <div className="frontpage">
        {sorted.map( (post) => {
            return <Post key={post.id} post={post} comments={post.comments}/>
          })
        }
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
