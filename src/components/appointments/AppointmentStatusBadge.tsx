import React from 'react';
import { CheckCircle, Clock, XCircle, CheckCircle2 } from 'lucide-react';

interface AppointmentStatusBadgeProps {
  status: string;
}

const statusConfig = {
  confirmed: {
    icon: CheckCircle,
    text: 'Confirmé',
    className: 'text-green-700 bg-green-100',
  },
  pending: {
    icon: Clock,
    text: 'En attente',
    className: 'text-yellow-700 bg-yellow-100',
  },
  completed: {
    icon: CheckCircle2,
    text: 'Terminé',
    className: 'text-blue-700 bg-blue-100',
  },
  cancelled: {
    icon: XCircle,
    text: 'Annulé',
    className: 'text-red-700 bg-red-100',
  },
};

const AppointmentStatusBadge: React.FC<AppointmentStatusBadgeProps> = ({ status }) => {
  const config = statusConfig[status] || statusConfig.pending;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      <Icon className="w-4 h-4 mr-1" />
      {config.text}
    </span>
  );
};

export default AppointmentStatusBadge;