// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import '../stylesheets/Home.css'
import Favorites from './Favorites.js'
import SearchResults from './SearchResults'
// import Map from './Map.js'
import MapContainer from './MapContainer'

import {API_URL} from '../constants.js'

export default function Home (props){

// setting initial value in state & setter method
  const [user, setUser] = useState('')
  const [input, setInput] = useState('')
  const [results, setResults] = useState(['crossfit', 'orangetheory', 'rumble'])

// initial fetch; equiv to componentDidMount
  useEffect(()=>{
    fetch(`${API_URL}/users/1`)
    .then(resp=>resp.json())
    .then(user=> setUser(user))
  }, [] //runs only on first render, not on each change
  )

// sets input value in state
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
  // this function should send a req to the Google Search or Google Maps API for all fitness venues
  // const search = function(){
  //  fetch(googleAPI/?="{input}")
  // }


  return(
    <div id="home">
      <header>
      <h1>Welcome, {user.name}</h1>

      </header>

      <Favorites user={user}/>

        <MapContainer/>

      <div id="search">
        <form>
          <input
          type='text'
          placeholder="search for fitness venues..."
          onChange={(e)=>handleChange(e)}
          ></input>
        </form>

        <SearchResults results={results}/>
      </div>

      <footer><h1>footer</h1></footer>
    </div>
  )
}

// <Map />
