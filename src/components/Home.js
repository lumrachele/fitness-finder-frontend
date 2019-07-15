// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import '../stylesheets/Home.css'
import Favorites from './Favorites.js'
// import Map from './Map.js'

import {API_URL} from '../constants.js'

export default function Home (props){

  const [user, setUser] = useState('')

  useEffect(()=>{
    fetch(`${API_URL}/users/1`)
    .then(resp=>resp.json())
    .then(user=> setUser(user))
  }, [] //runs only on first render, not on each change
  )


  return(
    <div id="home">
      <header>
      <h1>Welcome, {user.name}</h1>

      </header>

      <Favorites user={user}/>
      <div>map</div>
      <div id="search">
        <form>
          <input type='text' placeholder="search for fitness venues..."></input>
        </form>
      </div>

      <footer><h1>footer</h1></footer>
    </div>
  )
}

// <Map />
