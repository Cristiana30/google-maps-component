import React from 'react'
import Map from './Map'
import { location } from './utils/constant'

const MapComponent = () => (
    <div>
      <Map location={location} zoomLevel={27}></Map>
    </div>
  )

 export default MapComponent 

