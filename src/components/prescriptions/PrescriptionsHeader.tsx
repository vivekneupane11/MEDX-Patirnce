import React from 'react';
import { FileText, Plus } from 'lucide-react';
import Badge from '../common/Badge';

interface PrescriptionsHeaderProps {
  totalPrescriptions: number;
  expiringCount: number;
  onNewPrescription: () => void;
}

const PrescriptionsHeader: React.FC<PrescriptionsHeaderProps> = ({
  totalPrescriptions,
  expiringCount,
  onNewPrescription,
}) => {
  return (
    <div className="px-4 py-5 sm:px-6 border-b flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 text-gray-500" />
        <h3 className="text-lg font-medium leading-6 text-gray-900">Ordonnances</h3>
        <Badge type="info">{totalPrescriptions}</Badge>
        {expiringCount > 0 && (
          <Badge type="warning">{expiringCount} à renouveler</Badge>
        )}
      </div>
      <button
        onClick={onNewPrescription}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        <Plus className="h-4 w-4 mr-2" />
        Nouvelle ordonnance
      </button>
    </div>
  );
};

export default PrescriptionsHeader;