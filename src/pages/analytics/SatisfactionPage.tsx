import React from 'react';
import { ThumbsUp, Filter } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Janvier', satisfaction: 85, reponses: 120 },
  { month: 'Février', satisfaction: 88, reponses: 135 },
  { month: 'Mars', satisfaction: 92, reponses: 150 },
  { month: 'Avril', satisfaction: 87, reponses: 142 },
  { month: 'Mai', satisfaction: 90, reponses: 138 },
  { month: 'Juin', satisfaction: 93, reponses: 145 }
];

const SatisfactionPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Satisfaction Client</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <ThumbsUp className="h-8 w-8 text-green-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Évolution de la satisfaction</h2>
                <p className="text-sm text-gray-500">Taux de satisfaction et nombre de réponses par mois</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="satisfaction" 
                  name="Satisfaction (%)" 
                  stroke="#82ca9d" 
                  fill="#82ca9d" 
                  fillOpacity={0.3} 
                />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="reponses" 
                  name="Nombre de réponses" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.3} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionPage;