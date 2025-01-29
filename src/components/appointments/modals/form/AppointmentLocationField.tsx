import React from 'react';
import { MapPin, Video } from 'lucide-react';

interface AppointmentLocationFieldProps {
  mode: 'presentiel' | 'distanciel';
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const AppointmentLocationField: React.FC<AppointmentLocationFieldProps> = ({
  mode,
  value,
  onChange,
  error,
}) => {
  const Icon = mode === 'presentiel' ? MapPin : Video;
  const placeholder = mode === 'presentiel' 
    ? 'Adresse du rendez-vous'
    : 'Lien de la visioconférence';
  const type = mode === 'presentiel' ? 'text' : 'url';

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {mode === 'presentiel' ? 'Lieu' : 'Lien de visioconférence'}
      </label>
      <div className="mt-1 relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            pl-10 block w-full rounded-md shadow-sm
            ${error
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
          `}
          placeholder={placeholder}
          required
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentLocationField;