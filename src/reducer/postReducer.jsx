import { combineReducers } from 'redux'
import _ from 'lodash'

const INITIAL_INFO= {
  posts:[]
}

export default function (state= INITIAL_INFO, action){
  switch (action.type) {
    case 'INITIAL_DATA': {
      return action.data
      break;
    }

    case 'INCREMENT': {
      //send request to db to update
      let nextState = Object.assign({}, state)
      let index = _.findIndex(state.posts, ['id', action.data.id])
      nextState = _.update(nextState, ['posts', index, 'votes'], x => x + 1)
      return nextState
      break
    }

    case 'DECREMENT': {
    //send request to db to update
      let nextState = Object.assign({}, state)
      let index = _.findIndex(state.posts, ['id', action.data.id])
      nextState = _.update(nextState, ['posts', index, 'votes'], x => x - 1)
      return nextState
      break
    }

    case 'ADD_POST':
      let nextState = Object.assign({}, state)
      var newPost = {
        title: action.data.title,
        body: action.data.body,
        id: 222,
        votes: 0,
        user_id: 777
      }
      nextState.posts.push(newPost)
      return nextState
      break;
    case 'DELETE_POST':
      // delete a POST from the post array
      // call delete fn passing post id
      break;
    case 'ADD_COMMENT':
      // add a comment to the comments array
      // call post fn passing comment obj
      break;
    case 'DELETE_COMMENT':
        // delete a comment from the comments array
        // call delete fn passing comment id
      break;
    default:
      return state
  }
}
