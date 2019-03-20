import React, { Component } from 'react';
import { googleApiKey } from '../../../../config.js';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const style = {
  width: '100%',
  height: '100%',
};

const LoadingContainer = (props) => {
  return (
    <div className="loading-container">
      <h2>Loading boba places...</h2>
    </div>
  )
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: true,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(props) {
    if(this.state.showingInfo) {
      this.setState({
        showingInfo: false,
        activeMarker: null
      })
    }
  }

  onMarkerClick(props, e, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfo: true,

    })
  }

  render() {
    let mapCenter = {lat: this.props.places[0].coordinates.latitude,
      lng: this.props.places[0].coordinates.longitude};
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={11}
          style={style}
          center={mapCenter}
        >
         {this.props.places.map(place => {
          return (<Marker key={place.id} position={place.coordinates} />)
        })}
        {this.props.places.map( place => {
          let lat = place.coordinates.latitude;
          let lng = place.coordinates.longitude;
          return (
            <Marker
              title={place.name}
              key={place.id}
              name={place.name}
              position={{lat, lng}}
              onClick={this.onMarkerClick}
            />
        )})}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({apiKey: googleApiKey,
  LoadingContainer: LoadingContainer
})(MapContainer);
