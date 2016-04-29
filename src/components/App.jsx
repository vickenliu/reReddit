import React, {Component} from 'react'
import Post from './Post'
import Nav from './Nav'
import Frontpage from './Frontpage'

class App extends Component {

  render(){
    return (
      <div>
        <Nav/>
        <Frontpage />
      </div>
    )
  }
}

export default App
