import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const SimpleLineChart2 = () => {
  const data = [
    { name: 'Jan', line1: 1000000000, line2: 2000 },
    { name: 'Feb', line1: 100000050, line2: 3000 },
    { name: 'Mar', line1: 20000000000000000, line2: 4000 },
    // ... more data
  ];

  // Find the maximum value in the data for both lines
  const maxLine1 = Math.max(...data.map(item => item.line1));
  const maxLine2 = Math.max(...data.map(item => item.line2));

  // Normalize the data for both lines by dividing by their respective maximum values
  const normalizedData = data.map(item => ({
    ...item,
    line1Normalized: item.line1 / maxLine1,
    line2Normalized: item.line2 / maxLine2,
  }));

  // Custom tooltip formatter to display original data values
  const tooltipFormatter = (value, name, props) => {
    const originalValue = props.payload[name] * (name === 'line1' ? maxLine1 : maxLine2);
    return [originalValue.toLocaleString(), name];
  };

  console.log(normalizedData,data,'normalizedData')

  // Custom tick formatter for YAxis to display original data
  const yAxisTickFormatter = (value) => {
    return value.toLocaleString(); // Customize the format as needed
  };

  return (
    <LineChart width={500} height={300} data={normalizedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={yAxisTickFormatter} /> {/* Use custom tick formatter */}
      <Tooltip formatter={tooltipFormatter} /> {/* Use custom tooltip formatter */}
      <Legend />
      <Line type="monotone" dataKey="line1" stroke="blue" strokeWidth={2} /> {/* Use original data key */}
      <Line type="monotone" dataKey="line2" stroke="red" strokeWidth={2} /> {/* Use original data key */}
    </LineChart>
  );
};

export default SimpleLineChart2;
