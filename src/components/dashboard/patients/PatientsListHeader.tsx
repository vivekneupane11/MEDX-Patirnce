import React from 'react';
import { Users, Filter } from 'lucide-react';

interface PatientsListHeaderProps {
  onFilterChange: (filter: string) => void;
}

const PatientsListHeader: React.FC<PatientsListHeaderProps> = ({ onFilterChange }) => {
  return (
    <div className="px-4 py-5 sm:px-6 border-b flex justify-between items-center">
      <div className="flex items-center">
        <Users className="h-5 w-5 text-gray-500 mr-2" />
        <h3 className="text-lg font-medium leading-6 text-gray-900">Patients récents</h3>
      </div>
      <div className="flex items-center space-x-2">
        <select 
          onChange={(e) => onFilterChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Tous les patients</option>
          <option value="stable">Stables</option>
          <option value="attention">À surveiller</option>
          <option value="urgent">Urgents</option>
        </select>
        <button className="p-2 text-gray-400 hover:text-gray-500">
          <Filter className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default PatientsListHeader;