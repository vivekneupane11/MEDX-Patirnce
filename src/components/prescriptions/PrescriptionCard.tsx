import React from 'react';
import { FileText, Download, Share2, RefreshCw } from 'lucide-react';
import { Prescription } from '../../types';
import PrescriptionStatusBadge from './PrescriptionStatusBadge';
import ProviderInfo from './providers/ProviderInfo';
import { formatDate } from '../../utils/formatters';

interface PrescriptionCardProps {
  prescription: Prescription;
  onRenew: () => void;
  onDownload: () => void;
  onShare: () => void;
  onContactProvider?: () => void;
}

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
  prescription,
  onRenew,
  onDownload,
  onShare,
  onContactProvider,
}) => {
  return (
    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <PrescriptionStatusBadge status={prescription.status} />
          <div className="ml-4">
            <div className="flex items-center">
              <FileText className="h-4 w-4 text-gray-400 mr-2" />
              <p className="text-sm font-medium text-gray-900">{prescription.patientName}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">{prescription.deviceType}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Expire le</p>
            <p className="text-sm font-medium text-gray-900">
              {formatDate(prescription.expiresAt)}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={onDownload}
              className="p-2 text-gray-400 hover:text-blue-600"
              title="Télécharger"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={onShare}
              className="p-2 text-gray-400 hover:text-blue-600"
              title="Partager"
            >
              <Share2 className="h-5 w-5" />
            </button>
            {(prescription.status === 'expiring' || prescription.status === 'expired') && (
              <button
                onClick={onRenew}
                className="p-2 text-gray-400 hover:text-blue-600"
                title="Renouveler"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {prescription.instructions && (
        <p className="mt-2 text-sm text-gray-500">{prescription.instructions}</p>
      )}

      {prescription.provider && (
        <ProviderInfo 
          provider={prescription.provider}
          onContact={onContactProvider}
        />
      )}
    </div>
  );
};

export default PrescriptionCard;