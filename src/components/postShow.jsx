import React, {Component} from 'react'
import { Link } from "react-router";

class Singlepost extends Component {

  render(){
    return (
      <div>
        <Link to={`/`}>GO BACK</Link>
        <h1>single</h1>
      </div>
    )
  }
}

export default Singlepost
