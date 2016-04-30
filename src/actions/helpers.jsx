import request from 'superagent'

export function postData(url,data){
  request.post(url)
         .send(data)
         .end()
}


export function updateData(url,data){
  request.post(url)
         .send(data)
         .end(()=>console.log('data updated'))
}

export function deleteData(url){
  request.del(url)
         .end(()=>console.log('data deleted'))
}
