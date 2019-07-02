// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import Favorites from './Favorites.js'

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
    <div className="home">
      <h1>Welcome, {user.name}</h1>
      <Favorites user={user}/>

    </div>
  )
}
