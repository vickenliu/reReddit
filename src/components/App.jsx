import React, {Component} from 'react'
import Nav from './Nav'

class App extends Component {


  render(){
    let {location}= this.props
    return (
      <div>
        <Nav location={location}/>
        <div className='row postContainer'>
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
