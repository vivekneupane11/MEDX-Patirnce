import React from 'react';
import { Activity, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Janvier', consultations: 65, techniques: 45, suivis: 30 },
  { month: 'Février', consultations: 72, techniques: 38, suivis: 35 },
  { month: 'Mars', consultations: 80, techniques: 52, suivis: 40 },
  { month: 'Avril', consultations: 68, techniques: 42, suivis: 28 },
  { month: 'Mai', consultations: 75, techniques: 48, suivis: 32 },
  { month: 'Juin', consultations: 82, techniques: 55, suivis: 38 }
];

const InterventionsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Détail des Interventions</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Activity className="h-8 w-8 text-blue-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Total des interventions</h2>
                <p className="text-sm text-gray-500">Vue détaillée des interventions par type et période</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="consultations" name="Consultations" fill="#8884d8" />
                <Bar dataKey="techniques" name="Visites techniques" fill="#82ca9d" />
                <Bar dataKey="suivis" name="Suivis" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionsPage;