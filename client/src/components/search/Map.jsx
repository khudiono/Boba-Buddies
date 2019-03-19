import React, { Component } from 'react';
import { googleApiKey } from './config.js';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapView = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

export default MapView;
