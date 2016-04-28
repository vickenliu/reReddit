import React, {Component} from 'react'
import { Link } from "react-router";

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let {title,body,comments,id}=this.props
    let commentsList= comments.map(comment=>{
      return <Comment {...comment} />
    })
    return (
      <div>
        <Link to={`posts/${Number(id)}`}>{title}</Link>
        <p>{body}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default App
