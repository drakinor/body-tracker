// Import necessary dependencies
import React, { useState } from 'react';
import './App.css';

// Import the MeasurementsInput component
import MeasurementsInput from './MeasurmentsInput';

import MeasurementHistory from './MeasurementHistory';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  // State to store the measurements
  const [measurements, setMeasurements] = useState({
    weight: '',
    height: '',
    chest: '',
    waist: '',
    hips: '',
  });

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the measurements data (e.g., send it to the server)
    console.log('Submitted Measurements:', measurements);
    // You can add your logic here to handle the measurements data
  };

  return (
    <Router>
      <div className="App">
        <h1>Welcome to your Body Measurement Tracker!</h1>
        <h3>Please input in inches</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">Measurement History</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MeasurementsInput measurements={measurements} onInputChange={handleInputChange} onSubmit={handleSubmit} />} />

          <Route path="/history" element={<MeasurementHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;