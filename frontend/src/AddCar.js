import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = { plate, model, brand, price: parseFloat(price) };

    axios.post('http://localhost:8080/cars', newCar)
      .then(response => {
        console.log(response.data);

        //clear form after submission
        setPlate('');
        setModel('');
        setBrand('');
        setPrice('');
      })
      .catch(error => {
        console.error('There was an error adding the car!', error);
      });

      
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Car</h1>
      <div>
        <label>Plate: </label>
        <input type="text" value={plate} onChange={(e) => setPlate(e.target.value)} />
      </div>
      <div>
        <label>Model: </label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </div>
      <div>
        <label>Brand: </label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>
      <div>
        <label>Price: </label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
