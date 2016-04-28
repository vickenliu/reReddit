import posts from './postReducer'
import currentUser from './userReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './allUserReducers'


export default combineReducers({
  posts,
  currentUser,
  users,
  routing: routerReducer
})


// export function getPostById(posts,id){
//   // return posts.filter(post=>{
//   //   post.id == id? return post: return ;
//   // })
// }
