import React, { useState, Component} from 'react';
import API_URL from '../constants.js'

export default function Login (props){
  const [username, setUsername] = useState('')


  const handleInput = (e)=>{
    // this.setState({
    //   username: e.target.value
    // })
    setUsername(e.target.value)

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)

  }
    return(
      <div>
        <h1>
          Login Page
        </h1>
        <form onSubmit={
          e=>handleSubmit(e)
        }a>
          <input type="text" onChange={handleInput}
          >
          </input>
        </form>
      </div>

    )



}
