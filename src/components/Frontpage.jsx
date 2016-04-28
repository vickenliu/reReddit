import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import _ from 'lodash'

class Frontpage extends Component {

  render(){
    let sorted = _.sortBy(this.props.posts.posts, e => e.votes).reverse()

    return (
      <div className="frontpage">
        {
          sorted.map((post) => {
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
