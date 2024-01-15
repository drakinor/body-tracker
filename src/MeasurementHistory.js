import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// ... (other imports)

function MeasurementHistory() {
  const [measurementsHistory, setMeasurementsHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedMeasurements =
          JSON.parse(localStorage.getItem('measurements')) || [];
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
          <XAxis
            dataKey="timestamp"
            tickFormatter={(timestamp) =>
              new Date(timestamp).toLocaleDateString()
            }
          />
          <YAxis label={{ value: 'Inches', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value, name, props) => {
              const isMeasurement = ['waist', 'biceps', 'thighs', 'bust', 'hips', 'weight'].includes(name);

              if (isMeasurement) {
                const targetName = `target${name.charAt(0).toUpperCase() + name.slice(1)}`;
                const targetValue = props.payload[targetName];
                const unit = name === 'weight' ? 'lbs' : 'inches';

                return `${value} ${unit}`;
              }

              return value;
            }}
          />
          <Legend formatter={(value, entry) => {
            const isMeasurement = ['Waist', 'Biceps', 'Thighs', 'Bust', 'Hips', 'Weight'].includes(
              value
            );
            return isMeasurement ? `${value} (Actual)` : value;
          }} />
          <Line
            type="monotone"
            dataKey="waist"
            name="Waist"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="biceps"
            name="Biceps"
            stroke="#82ca9d"
          />
          <Line
            type="monotone"
            dataKey="thighs"
            name="Thighs"
            stroke="#ffc658"
          />
          <Line
            type="monotone"
            dataKey="bust"
            name="Bust"
            stroke="#ff7300"
          />
          <Line
            type="monotone"
            dataKey="hips"
            name="Hips"
            stroke="#ff0000"
          />
          <Line
            type="monotone"
            dataKey="weight"
            name="Weight"
            stroke="#F698BD"
          />
        </LineChart>
        </ResponsiveContainer>
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <h3>Target Values</h3>
        {measurementsHistory.map((measurement, index) => (
          <div key={index}>
            {measurement.targetWaist && <p>Waist Target: {measurement.targetWaist}</p>}
            {measurement.targetBiceps && <p>Biceps Target: {measurement.targetBiceps}</p>}
            {measurement.targetThighs && <p>Thighs Target: {measurement.targetThighs}</p>}
            {measurement.targetBust && <p>Bust Target: {measurement.targetBust}</p>}
            {measurement.targetHips && <p>Hips Target: {measurement.targetHips}</p>}
            {measurement.targetWeight && <p>Weight Target: {measurement.targetWeight}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeasurementHistory;