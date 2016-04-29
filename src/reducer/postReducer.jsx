
import { combineReducers } from 'redux'
// import {Map, List} from 'immutable'
import _ from 'lodash'

const INITIAL_INFO={
  posts:[]
}
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.posts
      break;
    case 'ADD_POST':
          // add a post to the posts array
          // call post fn passing post obj
          break;
    case 'DELETE_POST':
              // delete a POST from the post array
              // call delete fn passing post id
              break;
    case 'NEW_COMMENT':
    let nextState =  state.concat([])
    let index = _.findIndex(state, ['id', action.comment.post_id])
    nextState[index].comments.push(action.comment)

    return nextState
      // call post fn passing comment obj
      break;
    case 'DELETE_COMMENT':
        // delete a comment from the comments array
        // call delete fn passing comment id
        break;

    case 'INITIAL_DATA': {
      return action.data
      break;
    }

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
