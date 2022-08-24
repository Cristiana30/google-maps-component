import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import './map.css'

interface MapProps extends React.Props<any> {
    location: {
        address: string,
        lat: number,
        lng: number
    },
    zoomLevel: number
}

function Map({ location, zoomLevel }: MapProps){
    return (
    <div className="map">
      <h2 className="map-h2">The Store location!</h2>
  
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAy-o1z0BvkhwTxckNc_qrA29fCOVVZwO0', language: 'en' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}
 export default Map 

