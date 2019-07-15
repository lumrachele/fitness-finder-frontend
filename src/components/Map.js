import React from 'react'
import '../stylesheets/Map.css'


export default function Map(props){

  // const map = new google.maps.Map(document.getElementById("map"), {...});


  const initMap = function() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
  });
}


  return(

    <div id="map">
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX4rA5yo84K7tjHci_-KPzdDzWMC-_Xbg&callback=initMap"
  type="text/javascript"></script>
    {initMap()}
    </div>


  )
}
