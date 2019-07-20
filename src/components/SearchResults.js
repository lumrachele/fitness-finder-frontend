import React from 'react'

export default function SearchResults (props){



  return(
    <div id="results">
    <h1>Results from Search</h1>
    {props.results.map(r=>{
      return(<div key={r.id} className="result-card" id={r.id}>{r}</div>)
    })}

    </div>
  )
}
