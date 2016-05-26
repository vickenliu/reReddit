import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import _ from 'lodash'
import request    from 'superagent'
import {fetchInitData}  from '../actions/helpers'
import FBlogin  from './login'

class Frontpage extends Component {
  constructor(){
    super()
    this.state={
      showLogin:false
    }
  }
  static fetchData(store){
    return fetchInitData(store)
  }

  showlogin(){
    this.setState({
      showLogin:true
    })
  }

  render(){
    let {posts}= this.props
    let lists=[]
    let sorted = _.sortBy(posts, e => e.votes).reverse()
    posts.length>0? lists= sorted.map((post) => {
        return <Post key={post.id} post={post} showlogin={this.showlogin.bind(this)}/>
      }) : lists='loading...';
    let fbLogin= this.state.showLogin? <FBlogin /> : "";
    return (
    <div className='row'>
      <div className="col-md-8 col-md-offset-2">
        {lists}
        {fbLogin}
      </div>
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
