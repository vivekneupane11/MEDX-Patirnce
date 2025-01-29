import React from 'react';
import { Wrench, Clock, CheckCircle } from 'lucide-react';

interface ProviderBadgeProps {
  status: 'pending' | 'in_progress' | 'completed';
}

const statusConfig = {
  pending: {
    icon: Clock,
    text: 'En attente',
    className: 'text-yellow-700 bg-yellow-100',
  },
  in_progress: {
    icon: Wrench,
    text: 'En cours',
    className: 'text-blue-700 bg-blue-100',
  },
  completed: {
    icon: CheckCircle,
    text: 'Terminé',
    className: 'text-green-700 bg-green-100',
  },
};

const ProviderBadge: React.FC<ProviderBadgeProps> = ({ status }) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      <Icon className="w-4 h-4 mr-1" />
      {config.text}
    </span>
  );
};

export default ProviderBadge;