import React from 'react';

interface AppointmentNotesFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const AppointmentNotesField: React.FC<AppointmentNotesFieldProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Notes
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Instructions ou notes particulières..."
      />
    </div>
  );
};

export default AppointmentNotesField;