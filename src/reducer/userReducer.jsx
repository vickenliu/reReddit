import { combineReducers } from 'redux'

const INITIAL_INFO={
  currentUser:{}
}
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.currentUser
      break;
    default:
      return state
  }
}
