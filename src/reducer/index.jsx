import posts from './postReducer'
import currentUser from './userReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './allUsersReducer'
import showlogin from './showlogin'

export default combineReducers({
  posts,
  currentUser,
  users,
  showlogin,
  routing: routerReducer
})


export function getItemById(items,id){
  let result
  items.forEach((item) => {
    if(item.id==id){
      result=item
    }
  })
  return result
}
