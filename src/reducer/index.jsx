import posts from './postReducer'
import currentUser from './userReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'



export default combineReducers({
  posts,
  currentUser,
  routing: routerReducer
})
