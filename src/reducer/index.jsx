import posts from './postReducer'
import currentUser from './userReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './allUsersReducer'


export default combineReducers({
  posts,
  currentUser,
  users,
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
