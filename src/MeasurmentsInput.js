// MeasurmentsInput.js
import React, { useState } from 'react';
import { View, TextInput, Buttom} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MeasurementsInput() {
  const [waist, setWaist] = useState('');
  const [biceps, setBiceps] = useState('');
  const [thighs, setThighs] = useState('');
  const [bust, setBust] = useState('');
  const [hips, setHips] = useState('');
  const [dateTime, setDateTime] = useState('');
  // ... other measurements state variables

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDateTime = new Date().toLocaleString();
    setDateTime(currentDateTime);
    // Now, you can store wasit, biceps, thighs, bust, and hips ot your backend or any storage mechanism
  }
  // ... handlers for other measurements

  return (
    <div>
      <h2>Measurements Input</h2>
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

        <button type='submit'>Submit</button>

        {/* ... other measurement input fields */}
      </form>
    </div>
  );
}

export default MeasurementsInput;