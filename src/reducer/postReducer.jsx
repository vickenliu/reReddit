const INITIAL_INFO={
  posts:[]
}
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.posts
      break;
    case 'ADD_POST':
          // add a post to the posts array
          // call post fn passing post obj
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
