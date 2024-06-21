import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import CarDetails from './CarDetails';
import AddCar from './AddCar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:plate" element={<CarDetails />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
