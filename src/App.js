// Import necessary dependencies
import React, { useState } from 'react';
import './App.css';

// Import the MeasurementsInput component
import MeasurementsInput from './MeasurmentsInput';

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
    <div className="App">
      <h1>Body Measurements Tracker</h1>
      {/* Render the MeasurementsInput component */}
      <MeasurementsInput
        measurements={measurements}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
