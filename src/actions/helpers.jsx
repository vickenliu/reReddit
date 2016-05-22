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
  return new Promise(function(resolve,reject){
    request.get('https://re-reddit.herokuapp.com/init')
           .end(function(err,data){
             if(err){
               reject(err)
             }
             data=JSON.parse(data.text)
             store.dispatch(initialState(data))
             resolve(data)
           })
  })
}
