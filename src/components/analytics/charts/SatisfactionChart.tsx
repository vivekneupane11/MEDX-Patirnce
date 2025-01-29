import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'MediOxy Services', patients: 40, satisfaction: 92 },
  { name: 'OxySanté', patients: 25, satisfaction: 88 },
  { name: 'AirVital', patients: 20, satisfaction: 85 },
  { name: 'Autres', patients: 15, satisfaction: 90 },
];

interface SatisfactionChartProps {
  period: string;
  provider: string;
}

const SatisfactionChart: React.FC<SatisfactionChartProps> = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="patients" name="Patients" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="satisfaction" name="Satisfaction (%)" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SatisfactionChart;