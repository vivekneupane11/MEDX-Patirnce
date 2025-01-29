import React from 'react';

interface AppointmentTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const AppointmentTypeSelect: React.FC<AppointmentTypeSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Type de rendez-vous
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
      >
        <option value="consultation">Consultation</option>
        <option value="followup">Suivi</option>
        <option value="technical">Visite technique</option>
        <option value="renewal">Renouvellement</option>
      </select>
    </div>
  );
};

export default AppointmentTypeSelect;