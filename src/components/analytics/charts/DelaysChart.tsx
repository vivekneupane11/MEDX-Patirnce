import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', delays: 5, avgDuration: 2 },
  { month: 'Fév', delays: 3, avgDuration: 1.5 },
  { month: 'Mar', delays: 7, avgDuration: 3 },
  { month: 'Avr', delays: 4, avgDuration: 2 },
  { month: 'Mai', delays: 6, avgDuration: 2.5 },
  { month: 'Juin', delays: 3, avgDuration: 1 },
];

interface DelaysChartProps {
  period: string;
  provider: string;
}

const DelaysChart: React.FC<DelaysChartProps> = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="delays"
          name="Nombre de retards"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="avgDuration"
          name="Durée moyenne (jours)"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DelaysChart;