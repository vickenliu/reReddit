import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import _ from 'lodash'
import request    from 'superagent'
import {fetchInitData}  from '../actions/helpers'
import FBlogin  from './login'

class Frontpage extends Component {
  static fetchData(store){
    return fetchInitData(store)
  }

  render(){
    let {posts}= this.props
    let lists=[]
    let sorted = _.sortBy(posts, e => e.votes).reverse()
    posts.length>0? lists= sorted.map((post) => {
        return <Post key={post.id} post={post}/>
      }) : lists='loading...';
    let fbLogin= this.props.showlogin? <FBlogin /> : "";
    return (
    <div className='row'>
      <div className="col-md-8 col-md-offset-2">
        {lists}
      </div>
      {fbLogin}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    currentUser:state.currentUser,
    showlogin: state.showlogin
  }
}
export default connect(
  mapStateToProps
)(Frontpage)
