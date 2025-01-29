import React from 'react';
import { Users, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Janvier', actifs: 120, nouveaux: 15, sortants: 5 },
  { month: 'Février', actifs: 130, nouveaux: 18, sortants: 8 },
  { month: 'Mars', actifs: 140, nouveaux: 20, sortants: 10 },
  { month: 'Avril', actifs: 145, nouveaux: 12, sortants: 7 },
  { month: 'Mai', actifs: 150, nouveaux: 15, sortants: 10 },
  { month: 'Juin', actifs: 156, nouveaux: 16, sortants: 10 }
];

const PatientsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Suivi des Patients</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Évolution du nombre de patients</h2>
                <p className="text-sm text-gray-500">Suivi mensuel des patients actifs, nouveaux et sortants</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actifs" name="Patients actifs" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="nouveaux" name="Nouveaux patients" stroke="#82ca9d" />
                <Line type="monotone" dataKey="sortants" name="Patients sortants" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;