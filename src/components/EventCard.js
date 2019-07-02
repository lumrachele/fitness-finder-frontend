import React from 'react'
import '../stylesheets/EventCard.css'

export default function EventCard(props){


  const eventDetails = function (){
    if(props.event){
      return (<>
          <h1>{props.event.title}</h1>
          <p>{props.event.description}</p>
          <ul>
            <li>{props.event.date}</li>
            <li>{props.event.time}</li>
          </ul>
        </>
      )
    }
}



  return(
    <div className="event">
      {eventDetails()}
    </div>
  )
}

// {favoritesList()}
