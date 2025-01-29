import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface PrescriptionStatusBadgeProps {
  status: string;
}

const statusConfig = {
  active: {
    icon: CheckCircle,
    text: 'Active',
    className: 'text-green-700 bg-green-100',
  },
  expiring: {
    icon: AlertTriangle,
    text: 'À renouveler',
    className: 'text-yellow-700 bg-yellow-100',
  },
  expired: {
    icon: XCircle,
    text: 'Expirée',
    className: 'text-red-700 bg-red-100',
  },
};

const PrescriptionStatusBadge: React.FC<PrescriptionStatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status] || statusConfig.active;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      <Icon className="w-4 h-4 mr-1" />
      {config.text}
    </span>
  );
};

export default PrescriptionStatusBadge;