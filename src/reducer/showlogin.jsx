const INITIAL_INFO=false
export default function(state=INITIAL_INFO,action){
  switch (action.type) {
    case 'SHOW_LOGIN':
      return true;
      break;
    case 'HIDE_LOGIN':
      return false
      break;
    default:
      return state
  }
}
