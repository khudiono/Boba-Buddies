import React, { Component } from 'react';
import { googleApiKey } from './config.js';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// class MapView extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       showInfo: false,
//       activeMarker: {},
//       selectedPlace: {},
//       center: {
//       lat: 59.95,
//       lng: 30.33
//       },
//       zoom: 11,
//       isMarkerShown: true
//     }
//   }
//
//   render() {
//
//     return (
//       <div>
//       <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//       >
//       {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
// </GoogleMap>
//       </div>
//     )
//   }
// }

const MapView = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

export default MapView;
