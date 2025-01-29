import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const mockData = [
  { name: 'MediOxy Services', value: 40 },
  { name: 'OxySanté', value: 25 },
  { name: 'AirVital', value: 20 },
  { name: 'Autres', value: 15 },
];

interface PatientDistributionChartProps {
  period: string;
  provider: string;
}

const PatientDistributionChart: React.FC<PatientDistributionChartProps> = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={mockData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {mockData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PatientDistributionChart;