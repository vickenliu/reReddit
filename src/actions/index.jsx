export function initialState(data){
  return {
    type:'INITIAL_DATA',
    data
  }
}

export function increment(data) {
  return {
    type: 'INCREMENT',
    data
  }
}

export function decrement(data) {
  return {
    type: 'DECREMENT',
    data
  }
}

export function fbLogin(user){
  return {
    type:'FB_LOGIN',
    user
  }
}
