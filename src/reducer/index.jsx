import posts from './postReducer'
import currentUser from './userReducer'
import { combineReducers } from 'redux'




export default combineReducers({
  posts,
  currentUser
})
