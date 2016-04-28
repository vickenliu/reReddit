const INITIAL_INFO={
  posts:[{}],
  currentUser:{}
}
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'INITIAL_DATA':
    console.log('this is from server',action.data)
      return action.data
      break;
    default:
      return state

  }
}
