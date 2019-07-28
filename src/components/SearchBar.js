import React, {useEffect, useState} from 'react'
import SearchResults from './SearchResults.js'

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

    const handleSearch = function(e){
      console.log(input)
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
