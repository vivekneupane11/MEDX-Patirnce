import React from 'react';
import { Filter, Calendar } from 'lucide-react';

interface AppointmentFiltersProps {
  onFilterChange: (filter: string) => void;
}

const AppointmentFilters: React.FC<AppointmentFiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Tous les statuts</option>
          <option value="confirmed">Confirmés</option>
          <option value="pending">En attente</option>
          <option value="completed">Terminés</option>
          <option value="cancelled">Annulés</option>
        </select>

        <select
          className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Tous les types</option>
          <option value="consultation">Consultation</option>
          <option value="followup">Suivi</option>
          <option value="technical">Visite technique</option>
          <option value="renewal">Renouvellement</option>
        </select>

        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gray-400" />
          <select
            className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Toutes les dates</option>
            <option value="today">Aujourd'hui</option>
            <option value="tomorrow">Demain</option>
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
          </select>
        </div>
      </div>

      <button className="p-2 text-gray-400 hover:text-gray-500">
        <Filter className="h-5 w-5" />
      </button>
    </div>
  );
};

export default AppointmentFilters;