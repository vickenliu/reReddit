

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

exports.addNewComment = function (comment) {
  return {
    type:'NEW_COMMENT',
    comment
  }
};

export function addNewPost(post){
  return {
    type:'NEW_POST',
    post
  }
}
