import React from 'react'

export default function SearchResults (props){



  return(
    <div id="results">

    {props.results.map(r=>{
      return(<div key={r.id} className="result-card" >{r.title}</div>)
    })}

    </div>
  )
}
