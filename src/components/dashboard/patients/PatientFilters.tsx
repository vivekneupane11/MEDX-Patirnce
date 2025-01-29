import React from 'react';
import { Filter, Calendar } from 'lucide-react';

interface PatientFiltersProps {
  onFilterChange: (type: string, value: string) => void;
}

const PatientFilters: React.FC<PatientFiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <select
        onChange={(e) => onFilterChange('status', e.target.value)}
        className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="all">Tous les statuts</option>
        <option value="stable">Stables</option>
        <option value="attention">À surveiller</option>
        <option value="urgent">Urgents</option>
      </select>

      <select
        onChange={(e) => onFilterChange('treatment', e.target.value)}
        className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="all">Tous les traitements</option>
        <option value="oxygen">Oxygénothérapie</option>
        <option value="ventilation">Ventilation</option>
        <option value="concentrator">Concentrateur</option>
      </select>

      <div className="flex items-center space-x-2">
        <Calendar className="h-5 w-5 text-gray-400" />
        <select
          onChange={(e) => onFilterChange('date', e.target.value)}
          className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Toutes les dates</option>
          <option value="today">Aujourd'hui</option>
          <option value="week">Cette semaine</option>
          <option value="month">Ce mois</option>
        </select>
      </div>
    </div>
  );
}

export default PatientFilters;