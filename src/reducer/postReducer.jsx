
import { combineReducers } from 'redux'
// import {Map, List} from 'immutable'
import _ from 'lodash'
import {postData,updateData,deleteData} from '../actions/helpers'

const INITIAL_INFO={
  posts:[]
}
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.posts
      break;
    case 'NEW_POST':{
      if(action.post.title){
        postData('/posts',action.post)
      }else{
        return state
      }
      let nextState =  state.concat([])
      let _id=_.sortBy(state, e => e.id).reverse()[0].id+1
      let _post=Object.assign({},action.post,{id:_id,comments:[]})
      nextState.push(_post)
      return nextState
      break;}
    case 'DELETE_POST':{
      let nextState =state.filter((ele)=>{
        return ele.id!=action.id
      })
      deleteData('/posts/'+action.id,action.id)
      return nextState
              break;}
    case 'NEW_COMMENT':
    let nextState =  state.concat([])
    let index = _.findIndex(state, ['id', action.comment.post_id])
    nextState[index].comments.push(action.comment)
    postData('/comments',action.comment)
    return nextState
      // call post fn passing comment obj
      break;
    case 'DELETE_COMMENT':
        // delete a comment from the comments array
        // call delete fn passing comment id
        break;
    case 'INCREMENT': {
    //send request to db to update
      let nextState =  state.concat([])
      let index = _.findIndex(state, ['id', action.data.id])
      nextState[index].votes=nextState[index].votes+1
      return nextState
      break
    }

    case 'DECREMENT': {
    //send request to db to update
    let nextState =  state.concat([])
    let index = _.findIndex(state, ['id', action.data.id])
    nextState[index].votes=nextState[index].votes-1
    return nextState
      break
    }
    default:
      return state

  }
}
