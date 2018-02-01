import posts from './postReducer'
import currentUser from './userReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './allUsersReducer'
import showlogin from './showlogin'

export default combineReducers({
  currentUser,
  posts,
  routing: routerReducer,
  showlogin,
  users
})


export function getItemById(items = [],id){
  let result
  items.forEach((item) => {
    if(item.id==id){
      result=item
    }
  })
  return result
}
