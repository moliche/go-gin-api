import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { plate } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/cars/${plate}`)
      .then(response => {
        setCar(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the car details!', error);
      });
  }, [plate]);

  return (
    <div>
      {car ? (
        <div>
          <h1>{car.model} - {car.brand}</h1>
          <p>Plate: {car.plate}</p>
          <p>Price: ${car.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarDetails;
