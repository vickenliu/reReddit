import React, {Component} from 'react'
import Post from './Post'
import Nav from './Nav'
import Frontpage from './Frontpage'
import CreatePost from './CreatePost'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return (
      <div>
        <Nav/>
        <CreatePost />
        <Frontpage />
      </div>
    )
  }
}

export default App
