
export default function(state=[],action){
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data.users
      break;
    default:
      return state
  }
}
