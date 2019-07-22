import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../stylesheets/MapContainer.css'
//
const mapStyles = {
  height: '40%',
  width: '40%'
};


export class MapContainer extends Component {
  render() {
    return (
      <div id='map'>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBX4rA5yo84K7tjHci_-KPzdDzWMC-_Xbg'
})(MapContainer);
