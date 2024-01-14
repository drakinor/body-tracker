import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MeasurementsInput.css';

// Functional component definition
function MeasurementsInput({ measurements, onInputChange, onSubmit }) {
  // Initialize state variables
  const [waist, setWaist] = useState('');
  const [biceps, setBiceps] = useState('');
  const [thighs, setThighs] = useState('');
  const [bust, setBust] = useState('');
  const [hips, setHips] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState(''); // Declare setSubmissionMessage

  // Adding optional target measurements variables
  const [targetWaist, setTargetWaist] = useState('');
  const [targetBiceps, setTargetBiceps] = useState('');
  const [targetThighs, setTargetThighs] = useState('');
  const [targetBust, setTargetBust] = useState('');
  const [tragetHips, setTargetHips] = useState('');


  // Load measurements from local storage on component mount
  useEffect(() => {
    const storedMeasurements = JSON.parse(localStorage.getItem('measurements')) || {};
    setWaist(storedMeasurements.waist || '');
    setBiceps(storedMeasurements.biceps || '');
    setThighs(storedMeasurements.thighs || '');
    setBust(storedMeasurements.bust || '');
    setHips(storedMeasurements.hips || '');
    // Ensure the timestamp is set in a readable format
    setDateTime(new Date().toLocaleString());
  }, []);

  // Event handlers for input changes
  const handleWaistChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setWaist(event.target.value);
    }
  };

  const handleBicepsChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setBiceps(event.target.value);
    }
  };

  const handleThighsChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setThighs(event.target.value);
    }
  };

  const handleBustChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setBust(event.target.value);
    }
  };

  const handleHipsChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setHips(event.target.value);
    }
  };

  const handleTargetWaistChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setTargetWaist(event.target.value);
    }
  };

  const handleTargetBicepsChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setTargetBiceps(event.target.value);
    }
  };

  const handleTargetThighsChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setTargetThighs(event.target.value);
    }
  };

  const handleTargetBustChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setTargetBust(event.target.value);
    }
  };

  const handleTargetHipsChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setTargetHips(event.target.value);
    }
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDateTime = new Date().toISOString(); // Use ISO format for timestamp
    setDateTime(currentDateTime);
  
    // Create a new measurement object with the correct timestamp
    const newMeasurement = {
      timestamp: currentDateTime,
      waist,
      targetWaist,
      biceps,
      targetBiceps,
      thighs,
      targetThighs,
      bust,
      targetBust,
      hips,
      tragetHips,
    };
  
    // Retrieve existing measurements from localStorage
    const storedMeasurements = JSON.parse(localStorage.getItem('measurements')) || [];
  
    // Save the new measurement to the array
    storedMeasurements.push(newMeasurement);
  
    // Save the updated array back to localStorage
    localStorage.setItem('measurements', JSON.stringify(storedMeasurements));
  
    // Update the submission message
    setSubmissionMessage('Measurements submitted successfully!');
  };
  
  return (
    <div>
      <h2>Measurements Input</h2>
      <h3>Please input in inches</h3>
      <form onSubmit={handleSubmit}>
        <label>Waist:</label>
        <input type="text" value={waist} onChange={handleWaistChange} />
        <br />

        <label>Biceps:</label>
        <input type="text" value={biceps} onChange={handleBicepsChange} />
        <br />

        <label>Thighs:</label>
        <input type='text' value={thighs} onChange={handleThighsChange} />
        <br />

        <label>Bust:</label>
        <input type='text' value={bust} onChange={handleBustChange} />
        <br />

        <label>Hips:</label>
        <input type='text' value={hips} onChange={handleHipsChange} />
        <br />

         {/* Optional target input */}
         <label>Target Waist:</label>
        <input type="text" value={targetWaist} onChange={handleTargetWaistChange} />
        <br />
         
         <label>Target Biceps:</label>
        <input type="text" value={targetBiceps} onChange={handleTargetBicepsChange} />
        <br />
         
         <label>Target Thighs:</label>
        <input type="text" value={targetThighs} onChange={handleTargetThighsChange} />
        <br />
         
         <label>Target Bust:</label>
        <input type="text" value={targetBust} onChange={handleTargetBustChange} />
        <br />
         
         <label>Target Hips:</label>
        <input type="text" value={tragetHips} onChange={handleTargetHipsChange} />
        <br />

        {/* ... other measurement input fields */}
        <button type="submit">Submit</button>

        {/* Display submission message */}
        {submissionMessage && <p>{submissionMessage}</p>}
      </form>
    </div>
  );
}

// Add prop types to ensure 'measurements' prop is defined
MeasurementsInput.propTypes = {
  measurements: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MeasurementsInput;
