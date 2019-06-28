import React, {Component} from 'react';
import API_URL from '../constants.js'

export default class Login extends React.Component{
  state={
    username: ''
  }

  handleInput = (e)=>{
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)

  }

  render(){
    return(
      <div>
        <h1>
          Login Page
        </h1>
        <form onSubmit={
          e=>this.handleSubmit(e)
        }a>
          <input type="text" onChange={this.handleInput}
          >
          </input>
        </form>
      </div>

    )
  }


}
