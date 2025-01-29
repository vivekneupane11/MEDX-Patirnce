import React from 'react';

interface DeviceTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const DeviceTypeSelect: React.FC<DeviceTypeSelectProps> = ({
  value,
  onChange,
  className = '',
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Type de dispositif
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
        required
      >
        <option value="">Sélectionner un dispositif</option>
        <option value="concentrator">Concentrateur d'oxygène 5L</option>
        <option value="ventilation">Ventilation</option>
        <option value="mask">Masque nasal</option>
      </select>
    </div>
  );
};

export default DeviceTypeSelect;