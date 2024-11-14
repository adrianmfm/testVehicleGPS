import React from 'react';
import { InputMask } from 'primereact/inputmask';
const LocationForm = ({ form, handleInputChange, handleSubmit }) => {
  return (
    <div style={{
      margin: '20px auto',
      maxWidth: '600px',
      padding: '10px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h3>Crear nuevo punto</h3>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
      }}>
        <input
          type="number"
          name="latitude"
          value={form.latitude}
          onChange={handleInputChange}
          className="form-control"
          required
          placeholder="Latitud"
          step="any"
          style={{ padding: '8px', fontSize: '1rem' }}
        />
        <input
          type="number"
          name="longitude"
          value={form.longitude}
          onChange={handleInputChange}
          className="form-control"
          required
          placeholder="Longitud"
          step="any"
          style={{ padding: '8px', fontSize: '1rem' }}
        />
    <InputMask
          type="text"
          mask="HA-9999" 
          name="vehicle_identifier"
          value={form.vehicle_identifier}
          onChange={handleInputChange}
          placeholder="Identificador del vehículo"
          style={{ padding: '8px', fontSize: '1rem' }}
        />
        <button type="submit" className="btn btn-primary" style={{ padding: '10px', fontSize: '1rem', borderRadius: '22px' }}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
