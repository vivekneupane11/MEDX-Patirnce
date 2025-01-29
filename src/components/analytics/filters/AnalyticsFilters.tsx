import React from 'react';
import { Calendar, Users, Filter } from 'lucide-react';

interface AnalyticsFiltersProps {
  period: string;
  provider: string;
  onPeriodChange: (period: string) => void;
  onProviderChange: (provider: string) => void;
}

const AnalyticsFilters: React.FC<AnalyticsFiltersProps> = ({
  period,
  provider,
  onPeriodChange,
  onProviderChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-4 items-center">
      <div className="flex items-center">
        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
        <select
          value={period}
          onChange={(e) => onPeriodChange(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="day">Aujourd'hui</option>
          <option value="week">Cette semaine</option>
          <option value="month">Ce mois</option>
          <option value="year">Cette année</option>
        </select>
      </div>

      <div className="flex items-center">
        <Users className="w-5 h-5 text-gray-400 mr-2" />
        <select
          value={provider}
          onChange={(e) => onProviderChange(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">Tous les prestataires</option>
          <option value="medioxy">MediOxy Services</option>
          <option value="oxysante">OxySanté</option>
          <option value="airvital">AirVital</option>
        </select>
      </div>

      <button className="ml-auto p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
        <Filter className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AnalyticsFilters;