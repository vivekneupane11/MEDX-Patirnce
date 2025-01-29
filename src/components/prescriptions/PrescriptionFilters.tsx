import React from 'react';
import { Filter, Calendar } from 'lucide-react';

interface PrescriptionFiltersProps {
  onFilterChange: (filter: string) => void;
}

const PrescriptionFilters: React.FC<PrescriptionFiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Tous les statuts</option>
          <option value="active">Actives</option>
          <option value="expiring">À renouveler</option>
          <option value="expired">Expirées</option>
        </select>

        <select
          className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Tous les dispositifs</option>
          <option value="oxygen">Oxygénothérapie</option>
          <option value="ventilation">Ventilation</option>
          <option value="mask">Masque nasal</option>
        </select>

        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gray-400" />
          <select
            className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Toutes les dates</option>
            <option value="expiring-soon">Expire bientôt</option>
            <option value="expired">Expirées</option>
            <option value="last-month">Dernier mois</option>
          </select>
        </div>
      </div>

      <button className="p-2 text-gray-400 hover:text-gray-500">
        <Filter className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PrescriptionFilters;