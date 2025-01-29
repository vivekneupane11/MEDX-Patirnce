import React from 'react';
import { Bell, Filter } from 'lucide-react';
import Badge from '../../common/Badge';

interface AlertsHeaderProps {
  totalAlerts: number;
  urgentCount: number;
  onFilterChange: (filter: string) => void;
}

const AlertsHeader: React.FC<AlertsHeaderProps> = ({ totalAlerts, urgentCount, onFilterChange }) => {
  return (
    <div className="px-4 py-5 sm:px-6 border-b flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Bell className="h-5 w-5 text-gray-500" />
        <h3 className="text-lg font-medium leading-6 text-gray-900">Alertes récentes</h3>
        <Badge type="error">{totalAlerts}</Badge>
        {urgentCount > 0 && (
          <Badge type="warning">{urgentCount} urgentes</Badge>
        )}
      </div>
      <select 
        onChange={(e) => onFilterChange(e.target.value)}
        className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="all">Toutes les alertes</option>
        <option value="urgent">Urgentes</option>
        <option value="warning">À surveiller</option>
        <option value="info">Informations</option>
      </select>
    </div>
  );
};

export default AlertsHeader;