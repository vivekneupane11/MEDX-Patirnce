import React from 'react';
import { FileText, Filter } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Ordonnances', value: 150 },
  { name: 'Rapports techniques', value: 80 },
  { name: 'Comptes rendus', value: 40 },
  { name: 'Formulaires', value: 14 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DocumentsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Documents Traités</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <FileText className="h-8 w-8 text-orange-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Répartition des documents</h2>
                <p className="text-sm text-gray-500">Vue d'ensemble des documents par type</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={150}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;