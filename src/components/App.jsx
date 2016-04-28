import React, {Component} from 'react'
import Post from './Post'
import Nav from './Nav'
import Frontpage from './Frontpage'

const posts = [
  {id: 1, title: 'this place is niece', body: 'stomehinglsdjkd', user_id: 1, votes: 2},
  {id: 2, title: 'this fdf is gfg', body: 'stomehlsdjkd', user_id: 2, votes: 4},
  {id: 3, title: 'thisdfsfsf gfg', body: 'gfgfdghhjk', user_id: 4, votes: 7},
  {id: 4, title: 'thisdfee4566sfsf gfg', body: 'gfgfdghhjk', user_id: 2, votes: 7}
]

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Nav/>
        <Frontpage posts={posts} />
      </div>
    )
  }
}

export default App
