import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PerformanceChartProps {
  period: string;
  provider: string;
}

const mockData = [
  { name: "Jan", interventions: 65, satisfaction: 85 },
  { name: "Fév", interventions: 72, satisfaction: 88 },
  { name: "Mar", interventions: 80, satisfaction: 92 },
  { name: "Avr", interventions: 68, satisfaction: 87 },
  { name: "Mai", interventions: 75, satisfaction: 90 },
  { name: "Juin", interventions: 82, satisfaction: 93 }
];

const PerformanceChart: React.FC<PerformanceChartProps> = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="interventions"
          name="Interventions"
          fill="#8884d8"
        />
        <Bar
          yAxisId="right"
          dataKey="satisfaction"
          name="Satisfaction (%)"
          fill="#82ca9d"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;