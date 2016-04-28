

export function initialState(data){
  return {
    type:'INITIAL_DATA',
    data
  }
}


export function fbLogin(user){
  return {
    type:'FB_LOGIN',
    user
  }
}
