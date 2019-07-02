import React from 'react'
import EventCard from './EventCard.js'


export default function Favorites(props){

  const favoritesList = function (){
  return props.user.events.map(e=> {
    return(
      <li key={e.id}>
          <EventCard event={e}/>
        </li>
    )
  })
}




  return(
    <div className="favorites-list">
    <h1>Your Favorites</h1>
      <ul>
      {props.user.favorites ? favoritesList() : null
      }
      </ul>
    </div>
  )
}

// {favoritesList()}
