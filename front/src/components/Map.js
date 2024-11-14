import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map = ({ locations }) => {
  const center = {
    lat: -33.44599,
    lng: -70.66706
  };

  const mapContainerStyle = {
    width: '80%',
    height: '70vh',
    maxWidth: '100%',
    marginBottom: '50px',
    marginTop: '150px'
  };

  const lastLocation = locations[locations.length - 1];

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={lastLocation ? { lat: parseFloat(lastLocation.latitude), lng: parseFloat(lastLocation.longitude) } : center}
          zoom={12}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{
                lat: parseFloat(location.latitude),
                lng: parseFloat(location.longitude),
              }}
              title={String(location.vehicle_identifier).toUpperCase()}
              onClick={() => setSelectedMarker(location)}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedMarker.latitude),
                lng: parseFloat(selectedMarker.longitude),
              }}
              onCloseClick={() => setSelectedMarker(null)}
            >
            <div style={{ fontSize: '12px', padding: '5px' }}>
                <h3 style={{  fontSize: '14px' }}>Vehicle Identifier: {selectedMarker.vehicle_identifier.toUpperCase()}</h3>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
