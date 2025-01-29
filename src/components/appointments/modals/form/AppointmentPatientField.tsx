import React from 'react';
import { User } from 'lucide-react';

interface AppointmentPatientFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const AppointmentPatientField: React.FC<AppointmentPatientFieldProps> = ({ 
  value, 
  onChange,
  error 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Patient
      </label>
      <div className="mt-1 relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            pl-10 block w-full rounded-md shadow-sm
            ${error 
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
          `}
          placeholder="Nom du patient"
          required
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default AppointmentPatientField;