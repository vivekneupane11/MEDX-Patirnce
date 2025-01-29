import React from 'react';
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import { STATUS_CONFIG } from '../../../utils/constants';

interface PatientStatusBadgeProps {
  status: 'stable' | 'attention' | 'urgent';
}

const icons = {
  stable: CheckCircle,
  attention: AlertTriangle,
  urgent: AlertCircle,
};

const PatientStatusBadge: React.FC<PatientStatusBadgeProps> = ({ status }) => {
  const StatusIcon = icons[status];
  const config = STATUS_CONFIG[status];

  return (
    <div className="flex items-center">
      <StatusIcon className={`h-5 w-5 ${config.className}`} />
      <span className={`ml-2 text-sm ${config.className}`}>
        {config.label}
      </span>
    </div>
  );
};

export default PatientStatusBadge;