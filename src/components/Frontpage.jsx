import React, {Component} from 'react'
import Post from './Post'

class Frontpage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="frontpage">
        {this.props.posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    )
  }
}

export default Frontpage
