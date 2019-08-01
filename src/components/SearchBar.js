import React, {useEffect, useState} from 'react'
import SearchResults from './SearchResults.js'

import {API_URL} from '../constants.js'

export default function SearchBar(props){
  const [input, setInput] = useState('')
  const [results, setResults] = useState(['crossfit', 'orangetheory', 'rumble'])

  // sets input value in state
    function handleChange (e){
      // e.preventDefault()
      setInput(e.target.value)
    }

    //start searching/ fetching after a few seconds of not typing

    // call the fn in a set timeout after a keypress

// want to make sure that this only runs once on the last keypress
// debouncing?
    const handleSearch = function(e){
      // only if time reaches 3 seconds after keypress, run the set timeout search function
      // setTimeout(()=>{console.log("hit search")}, 3000)
      //otherwise, render some loading animation

      // fetch(`${SEARCH_URL/input}`)
      // .then(r=>r.json())
      // .then(r=> setResults(r))
      fetch(`http://localhost:3000/api/v1/events`)
      .then(r=>r.json())
      // .then(r=>console.log(r))
      .then(r=> setResults(r))
    }

    const filterResults = function(res){
      if(input){
          res.filter(res=> res.includes(input))
      }else{
        //fetch all results
      }

    }

  return(
    <div id="search">
    <form>
      <input
      type='text'
      placeholder="search for fitness venues..."
      onChange={(e)=>handleChange(e)}
      onKeyUp={(e)=>{handleSearch(e)}}
      ></input>
    </form>

      <SearchResults results={results}/>
    </div>
  )
}
