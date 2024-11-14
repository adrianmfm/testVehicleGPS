import React, { useState, useEffect } from 'react';

const LocationFilter = ({ onFilterChange }) => {
  const [vehicleIdentifiers, setVehicleIdentifiers] = useState([]);
  const [selectedIdentifier, setSelectedIdentifier] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/gps')
      .then(response => response.json())
      .then(data => {
        const identifiers = [...new Set(data.map(location => location.vehicle_identifier))];
        setVehicleIdentifiers(identifiers);
      })
      .catch(error => console.log("Error al obtener los identificadores", error));
  }, []);

  const handleSelectChange = (e) => {
    setSelectedIdentifier(e.target.value);
  };

  const handleFilterClick = () => {
    onFilterChange(selectedIdentifier);
  };

  return (
    <div style={{
      margin: '20px auto',
      maxWidth: '400px',
      padding: '10px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h3>Filtrar por Vehículo</h3>
      <select
        value={selectedIdentifier}
        onChange={handleSelectChange}
        className="form-control"
        style={{
          padding: '5px',
          marginBottom: '10px',
          width: '100%',
        }}
      >
        <option value="">Seleccionar ID de Vehículo</option>
        {vehicleIdentifiers.map((identifier, index) => (
          <option key={index} value={identifier}>
            {identifier}
          </option>
        ))}
      </select>
      <button
        onClick={handleFilterClick}
        className="btn btn-primary"
        style={{ padding: '10px', fontSize: '1rem', width: '100%', borderRadius: '22px'}}
      >
        Filtrar
      </button>
    </div>
  );
};

export default LocationFilter;
