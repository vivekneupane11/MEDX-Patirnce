import React from 'react';
import { Provider } from '../../../types';

interface ProviderSelectProps {
  providers: Provider[];
  selectedProviderId?: number;
  onChange: (providerId: number) => void;
  className?: string;
}

const ProviderSelect: React.FC<ProviderSelectProps> = ({
  providers,
  selectedProviderId,
  onChange,
  className = '',
}) => {
  return (
    <select
      value={selectedProviderId}
      onChange={(e) => onChange(Number(e.target.value))}
      className={`text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${className}`}
    >
      <option value="">Sélectionner un prestataire</option>
      {providers.map((provider) => (
        <option key={provider.id} value={provider.id}>
          {provider.name}
        </option>
      ))}
    </select>
  );
};

export default ProviderSelect;