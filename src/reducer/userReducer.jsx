

export default function(state={},action){
  switch (action.type) {
    case 'FB_LOGIN':
      console.log('user reduce running')
      return action.data
      break;
    default:
      return state

  }
}
