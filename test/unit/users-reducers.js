import {expect} from 'chai'
import * as actions from '../../src/actions'
let assert = require('chai').assert;
import allUsersReducer from '../../src/reducer/allUsersReducer'
import userReducer from '../../src/reducer/userReducer'


describe('allUsersReducer tests', () => {
  it('INITIAL_DATA,load all users', () => {
    const initialState = []
    const data={
      users:[
        {id:1,name:'Vicken'},
        {id:2,name:'Linda'}
      ]
    }
    const expectedAction =[
      {id:1,name:'Vicken'},
      {id:2,name:'Linda'}
    ]
    expect(allUsersReducer(initialState,{
      type:'INITIAL_DATA', data
    })).to.deep.equal(expectedAction)
  })
  it('INITIAL_DATA,return previouse state', () => {
    const initialState = []
    const data={
      users:[
        {id:1,name:'Vicken'},
        {id:2,name:'Linda'}
      ]
    }
    expect(allUsersReducer(initialState,{
      type:'INITIAL_BULLSHIT', data
    })).to.deep.equal(initialState)
  })
})

describe('userReducer tests', () => {
  it('INITIAL_DATA,return new state', () => {
    const initialState = {}
    const data={
      currentUser:{
        name:'Vicken',
        id:1
      }
    }
    const expectState={
      name:'Vicken',
      id:1
    }
    expect(userReducer(initialState,{
      type:'INITIAL_DATA', data
    })).to.deep.equal(expectState)
  })
})
