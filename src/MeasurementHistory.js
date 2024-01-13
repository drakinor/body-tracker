import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MeasurementHistory() {
  const [measurementsHistory, setMeasurementsHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch measurements from localStorage on component mount
        const storedMeasurements = JSON.parse(localStorage.getItem('measurements')) || [];
        setMeasurementsHistory(storedMeasurements);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Measurement History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={measurementsHistory}>
          <XAxis dataKey="timestamp" tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString()} />
          <YAxis label={{ value: 'Inches', angle: -90, position: 'insideLeft' }} />
          <Tooltip labelFormatter={(label) => new Date(label).toLocaleDateString()} />
          <Legend />
          <Line type="monotone" dataKey="waist" name="Waist" stroke="#8884d8" />
          <Line type="monotone" dataKey="biceps" name="Biceps" stroke="#82ca9d" />
          <Line type="monotone" dataKey="thighs" name="Thighs" stroke="#ffc658" />
          <Line type="monotone" dataKey="bust" name="Bust" stroke="#ff7300" />
          <Line type="monotone" dataKey="hips" name="Hips" stroke="#ff0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MeasurementHistory;
