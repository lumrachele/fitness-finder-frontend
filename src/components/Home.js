// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import Favorites from './Favorites.js'

import {API_URL} from '../constants.js'

export default function Home (props){
  // constructor(props){
  //   super(props)
  // }
  const [user, setUser] = useState('')
  useEffect(()=>{
    fetch(`${API_URL}/users/1`)
    .then(resp=>resp.json()
  ).then(user=> setUser(user.name))
  }, [] //runs only on first render, not on each change
  )


  return(
    <div>
      <h1>Welcome, {user}</h1>
      <Favorites/>

    </div>
  )
}
