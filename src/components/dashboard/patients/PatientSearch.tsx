import React from 'react';
import { Search } from 'lucide-react';

interface PatientSearchProps {
  onSearch: (query: string) => void;
}

const PatientSearch: React.FC<PatientSearchProps> = ({ onSearch }) => {
  return (
    <div className="relative flex-1 max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Rechercher par nom, traitement ou statut..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default PatientSearch;