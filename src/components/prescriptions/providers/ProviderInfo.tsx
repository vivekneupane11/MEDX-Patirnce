import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Provider } from '../../../types';
import ProviderBadge from './ProviderBadge';

interface ProviderInfoProps {
  provider: Provider;
  onContact?: () => void;
}

const ProviderInfo: React.FC<ProviderInfoProps> = ({ provider, onContact }) => {
  return (
    <div className="mt-4 bg-gray-50 rounded-md p-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-900">{provider.name}</h4>
          <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              {provider.phone}
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              {provider.email}
            </div>
          </div>
        </div>
        {provider.interventionStatus && (
          <ProviderBadge status={provider.interventionStatus} />
        )}
      </div>
      {onContact && (
        <button
          onClick={onContact}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Contacter le prestataire
        </button>
      )}
    </div>
  );
};

export default ProviderInfo;