import request          from 'superagent'
import {initialState}   from './index'

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


export function fetchInitData(store){
  return new Promise((resolve,reject) => {
    request.get('http://localhost:3000/init')
           .end(function(err,data){
             console.log('here is data',err)
             if(err){
               reject(err)
             }
            //  data=JSON.parse(data.text)
            //  store.dispatch(initialState(data.body))
             resolve(data.body)
           })
  })
}
