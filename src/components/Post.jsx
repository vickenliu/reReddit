import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default App
