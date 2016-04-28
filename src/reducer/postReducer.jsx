import { combineReducers } from 'redux'
// import {Map, List} from 'immutable'
import _ from 'lodash'

const INITIAL_INFO={
  posts:[{}],
  currentUser:{}
}
export default function(state=INITIAL_INFO,action){
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

    default:
      return state

  }
}
