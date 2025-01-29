import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const mockData = [
  { name: 'Consultation', value: 35 },
  { name: 'Visite technique', value: 25 },
  { name: 'Suivi', value: 20 },
  { name: 'Renouvellement', value: 20 },
];

interface InterventionsChartProps {
  period: string;
  provider: string;
}

const InterventionsChart: React.FC<InterventionsChartProps> = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={mockData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
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

export default InterventionsChart;