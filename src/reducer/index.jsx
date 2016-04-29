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


export function getPostById(posts,id){
  let result
  posts.forEach((post) => {
    if(post.id==id){
      result=post
    }
  })
  return result
}
