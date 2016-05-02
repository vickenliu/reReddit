import {expect} from 'chai'
import * as actions from '../../src/actions'

describe('actions creators', () => {
  it('INITIAL_DATA,get a data set', () => {
    const data = 'Finish docs'
    const expectedAction = {
      type: 'INITIAL_DATA',
      data
    }
    expect(actions.initialState(data)).to.deep.equal(expectedAction)
  })

  it('increment,increment votes', () => {
    const data = 'Finish docs'
    const expectedAction = {
      type: 'INCREMENT',
      data
    }
    expect(actions.increment(data)).to.deep.equal(expectedAction)
  })

  it('decrement votes', () => {
    const data = 'Finish docs'
    const expectedAction = {
      type: 'DECREMENT',
      data
    }
    expect(actions.decrement(data)).to.deep.equal(expectedAction)
  })

  it('addNewComment', () => {
    const comment = 'Finish docs'
    const expectedAction = {
      type: 'NEW_COMMENT',
      comment
    }
    expect(actions.addNewComment(comment)).to.deep.equal(expectedAction)
  })

  it('addNewPost', () => {
    const post = 'Finish docs'
    const expectedAction = {
      type: 'NEW_POST',
      post
    }
    expect(actions.addNewPost(post)).to.deep.equal(expectedAction)
  })

  it('deletePost', () => {
    const id = 2
    const expectedAction = {
      type: 'DELETE_POST',
      id
    }
    expect(actions.deletePost(id)).to.deep.equal(expectedAction)
  })
})
