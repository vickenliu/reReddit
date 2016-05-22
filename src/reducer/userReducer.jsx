

export default function(state={},action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.currentUser
      break;
    default:
      return state
  }
}
