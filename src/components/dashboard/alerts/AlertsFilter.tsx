import React from 'react';

interface AlertsFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const AlertsFilter: React.FC<AlertsFilterProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm border-gray-300 rounded-md shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500"
      aria-label="Filtrer les alertes"
    >
      <option value="all">Toutes les alertes</option>
      <option value="urgent">Urgentes</option>
      <option value="warning">À surveiller</option>
      <option value="info">Informations</option>
    </select>
  );
};

export default AlertsFilter;