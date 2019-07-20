// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import '../stylesheets/Home.css'
import Favorites from './Favorites.js'
// import Map from './Map.js'

import {API_URL} from '../constants.js'

export default function Home (props){

  const [user, setUser] = useState('')
  const [input, setInput] = useState('')

  useEffect(()=>{
    fetch(`${API_URL}/users/1`)
    .then(resp=>resp.json())
    .then(user=> setUser(user))
  }, [] //runs only on first render, not on each change
  )

  const handleChange = function (e){
    // e.preventDefault()
    setInput(e.target.value)
  }

// memoization to reduce # of requests to backend
// to accept a search function that calls to the backend
  const memoize = function(func){
    let cache = {}
    return function(...args){
      let key = args[0]
      if (!!cache[key]){
        return cache[key]
      }else {
        let val = func.apply(null, args)
        cache[key] = val
        return val
      }
    }
  }
  // 
  // const search = function(){
  //
  // }


  return(
    <div id="home">
      <header>
      <h1>Welcome, {user.name}</h1>

      </header>

      <Favorites user={user}/>
      <div>map</div>
      <div id="search">
        <form>
          <input
          type='text'
          placeholder="search for fitness venues..."
          onChange={(e)=>handleChange(e)}
          ></input>
        </form>
      </div>

      <footer><h1>footer</h1></footer>
    </div>
  )
}

// <Map />
