import React from "react";
import GoogleMapReact from "google-map-react";
import './Map.css'
import LocationPin from '../LocationPin/LocationPin'


const Map = ({ location, zoomLevel }) => (

    
    <div className="map">
      <h2>Atölyemizi ziyaret edin!</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;