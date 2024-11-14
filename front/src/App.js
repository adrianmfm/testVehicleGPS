import React, { useState, useEffect } from 'react';
import useLocations from './hooks/useLocations';
import Map from './components/Map';
import LocationForm from './components/LocationForm';
import LocationFilter from './components/LocationFilter'; 
import './App.css';
const App = () => {
  const { locations, form, handleInputChange, handleSubmit } = useLocations();
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const handleFilterChange = (identifier) => {
    if (identifier) {
      const filtered = locations.filter(location => location.vehicle_identifier === identifier);
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations); 
    }
  };

  useEffect(() => {
    setFilteredLocations(locations); 
  }, [locations]);

  return (
    <div className="main-container">
      <div className="form-filter-container">
        <LocationForm form={form} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        <LocationFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="map-container">
        <Map locations={filteredLocations} />
      </div>
    </div>
  );
};

export default App;
