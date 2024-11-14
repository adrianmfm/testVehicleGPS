import { useState, useEffect } from 'react';

const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [form, setForm] = useState({
    latitude: '',
    longitude: '',
    vehicle_identifier: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/gps')
      .then(response => response.json())
      .then(data => {
        setLocations(data);
      })
      .catch(error => console.log("Error al obtener los puntos", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const latitude = parseFloat(form.latitude);
    const longitude = parseFloat(form.longitude);

    const newLocationToCreate = {
      latitude,
      longitude,
      vehicle_identifier: form.vehicle_identifier,
      sent_at: new Date().toISOString(),
    };

    fetch('http://localhost:3000/api/v1/gps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLocationToCreate),
    })
      .then(response => response.json())
      .then(() => {
        setLocations(prevLocations => {
          const updatedLocations = prevLocations.map(location =>
            location.vehicle_identifier === newLocationToCreate.vehicle_identifier
              ? { ...location, latitude: newLocationToCreate.latitude, longitude: newLocationToCreate.longitude }
              : location
          );
          if (!updatedLocations.some(location => location.vehicle_identifier === newLocationToCreate.vehicle_identifier)) {
            updatedLocations.push(newLocationToCreate);
          }
          return updatedLocations;
        });

        setForm({ latitude: '', longitude: '', vehicle_identifier: '' });
        
      })
      .catch(error => console.log("Error al enviar el formulario", error));
  };

  return {
    locations,
    form,
    handleInputChange,
    handleSubmit
  };
};

export default useLocations;
