// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import '../stylesheets/Home.css'
import Favorites from './Favorites.js'
import SearchBar from './SearchBar.js'
// import SearchResults from './SearchResults.js'
import MapContainer from './MapContainer.js'
import SideNav from './SideNav.js'

import {API_URL} from '../constants.js'

export default function Home (props){

// setting initial value in state & setter method
  const [user, setUser] = useState('')

// initial fetch; equiv to componentDidMount
  useEffect(()=>{
    fetch(`${API_URL}/users/1`)
    .then(resp=>resp.json())
    .then(user=> setUser(user))
  }, [] //runs only on first render, not on each change
  )


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


  return(<>
    <SideNav />
    <div id="home">
      <header>
      <h1>Welcome, {user.name}</h1>

      </header>


      <Favorites user={user}/>


        <MapContainer/>

      <SearchBar/>

      <footer><h1>footer</h1></footer>
    </div>
    </>
  )
}

// <Map />
