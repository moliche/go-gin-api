
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the car data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map(car => (
          <li key={car.plate}>
            {car.model} - {car.brand} - ${car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
