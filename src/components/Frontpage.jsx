import React, {Component} from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import _ from 'lodash'
import request    from 'superagent'
import {initialState}   from '../actions'

class Frontpage extends Component {
  static fetchData(store){
    return new Promise(function(resolve,reject){
      request.get('http://localhost:3000/init')
             .end(function(err,data){
               if(err){
                 reject(err)
               }
               data=JSON.parse(data.text)
               store.dispatch(initialState(data))
               resolve(data)
             })
    })
  }

  render(){
    let {posts}= this.props
    let lists=[]
    let sorted = _.sortBy(posts, e => e.votes).reverse()
    posts.length>0? lists= sorted.map((post) => {
        return <Post key={post.id} post={post} />
      }) : lists='loading...';
    return (
    <div className='row'>
      <div className="col-md-8 col-md-offset-2">
        {lists}
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
