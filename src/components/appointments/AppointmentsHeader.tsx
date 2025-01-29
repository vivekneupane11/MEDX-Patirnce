import React from 'react';
import { Plus, Filter } from 'lucide-react';
import SearchBar from '../dashboard/search/SearchBar';

interface AppointmentsHeaderProps {
  onSearch: (query: string) => void;
  onNewAppointment: () => void;
  onFilterChange: (filter: string) => void;
}

const AppointmentsHeader: React.FC<AppointmentsHeaderProps> = ({
  onSearch,
  onNewAppointment,
  onFilterChange,
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Rendez-vous</h1>
        <button
          onClick={onNewAppointment}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouveau rendez-vous
        </button>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <SearchBar
            onSearch={onSearch}
            placeholder="Rechercher un rendez-vous par nom, date ou statut..."
          />
        </div>
        <div className="flex space-x-4">
          <select
            onChange={(e) => onFilterChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="all">Tous les statuts</option>
            <option value="confirmed">Confirmés</option>
            <option value="pending">En attente</option>
            <option value="cancelled">Annulés</option>
          </select>
          <select
            onChange={(e) => onFilterChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="all">Tous les types</option>
            <option value="consultation">Consultation</option>
            <option value="followup">Suivi</option>
            <option value="technical">Visite technique</option>
          </select>
          <button
            className="p-2 text-gray-400 hover:text-gray-500"
            title="Plus de filtres"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsHeader;