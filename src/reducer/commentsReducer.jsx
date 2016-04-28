
// may not need
export default function(state={},action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return state.concat([action.data])
      break;
    default:
      return state

  }
}
