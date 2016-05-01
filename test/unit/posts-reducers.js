import {expect} from 'chai'
import * as actions from '../../src/actions'
let assert = require('chai').assert;
import postReducer from '../../src/reducer/postReducer'
import {postData,updateData,deleteData} from '../../src/actions/helpers'


describe('postReducer tests', () => {
  it('INITIAL_DATA,load all posts', () => {
    const initialState = []
    const data={
      posts:[
        {id:1,title:'Vicken'},
        {id:2,title:'Linda'}
      ]
    }
    const expectedAction =[
      {id:1,title:'Vicken'},
      {id:2,title:'Linda'}
    ]
    expect(postReducer(initialState,{
      type:'INITIAL_DATA', data
    })).to.deep.equal(expectedAction)
  })
  it('INITIAL_DATA,return previouse state', () => {
    const initialState = []
    const data={
      posts:[
        {id:1,title:'Vicken'},
        {id:2,title:'Linda'}
      ]
    }
    expect(postReducer(initialState,{
      type:'BULLSHIT', data
    })).to.deep.equal(initialState)
  })

  it('NEW_POST,return new state with a new post', () => {
    const initialState = [
      {id:1,title:'Vicken'},
      {id:2,title:'Linda'}
    ]
    const expectState=[
      {id:1,title:'Vicken'},
      {id:2,title:'Linda'},
      {id:3,title:'HELLO',comments:[]}
    ]
    const post={id:3,title:'HELLO'}
    expect(postReducer(initialState,{
      type:'NEW_POST', post
    })).to.deep.equal(expectState)
  })

  it('DELETE_POST,return new state without the one matches provided post id', () => {
    const initialState = [
      {id:1,title:'Vicken'},
      {id:2,title:'Linda'}
    ]
    const expectState=[
      {id:1,title:'Vicken'}
    ]
    const id=2
    expect(postReducer(initialState,{
      type:'DELETE_POST', id
    })).to.deep.equal(expectState)
  })

  it('NEW_COMMENT,return new state with specific items comments size increment 1', () => {
    const initialState = [
      {id:1,title:'Vicken',
        comments:[]
      }
    ]
    const comment={title:'Linda',post_id:1}
    expect(postReducer(initialState,{
      type:'NEW_COMMENT', comment
    })[0].comments.length).to.deep.equal(1)
  })

  it('INCREMENT,return new state with specific items votes increment 1', () => {
    const initialState = [
      {id:1,title:'Vicken',
        votes:1
      }
    ]
    const data={id:1}
    expect(postReducer(initialState,{
      type:'INCREMENT', data
    })[0].votes).to.deep.equal(2)
  })

  it('DECREMENT,return new state with specific items votes decrement 1', () => {
    const initialState = [
      {id:1,title:'Vicken',
        votes:1
      }
    ]
    const data={id:1}
    expect(postReducer(initialState,{
      type:'DECREMENT', data
    })[0].votes).to.deep.equal(0)
  })
})
