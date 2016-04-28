import React, {Component} from 'react'
import Nav from './Nav'



class App extends Component {


  render(){
    let {location}= this.props
    return (
      <div>
        <Nav location={location}/>
        {this.props.children}
      </div>
    )
  }
}

export default App
