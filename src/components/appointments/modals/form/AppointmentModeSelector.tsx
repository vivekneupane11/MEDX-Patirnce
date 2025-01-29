import React from 'react';
import { Users, Video } from 'lucide-react';

interface AppointmentModeSelectorProps {
  mode: 'presentiel' | 'distanciel';
  onChange: (mode: 'presentiel' | 'distanciel') => void;
}

const AppointmentModeSelector: React.FC<AppointmentModeSelectorProps> = ({ mode, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Mode de rendez-vous
      </label>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onChange('presentiel')}
          className={`
            flex items-center justify-center p-3 rounded-lg border transition-all duration-200
            ${mode === 'presentiel'
              ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          <Users className={`w-5 h-5 mr-2 ${mode === 'presentiel' ? 'text-blue-500' : 'text-gray-400'}`} />
          Présentiel
        </button>
        <button
          type="button"
          onClick={() => onChange('distanciel')}
          className={`
            flex items-center justify-center p-3 rounded-lg border transition-all duration-200
            ${mode === 'distanciel'
              ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          <Video className={`w-5 h-5 mr-2 ${mode === 'distanciel' ? 'text-blue-500' : 'text-gray-400'}`} />
          Distanciel
        </button>
      </div>
    </div>
  );
};

export default AppointmentModeSelector;