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
    request.get(`${process.env.URL}/init`)
           .end(function(err,data){
             console.log('here is data',err)
             if(err){
               return reject(err)
             }
             resolve(data.body)
           })
  })
}
