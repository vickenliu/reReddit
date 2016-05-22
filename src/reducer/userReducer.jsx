const INITIAL_INFO=[]
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.currentUser
      break;
    default:
      return state
  }
}
