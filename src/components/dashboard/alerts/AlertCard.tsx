import React from 'react';
import { AlertCircle, AlertTriangle, Bell } from 'lucide-react';
import { Alert } from '../../../types';
import { formatTimeAgo } from '../../../utils/formatters';
import BaseCard from '../cards/BaseCard';

interface AlertCardProps {
  alert: Alert;
  onAction?: (id: number) => void;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert, onAction }) => {
  const getIcon = () => {
    switch (alert.type) {
      case 'urgent': return AlertCircle;
      case 'warning': return AlertTriangle;
      default: return Bell;
    }
  };

  const getColorClasses = () => {
    switch (alert.type) {
      case 'urgent': return 'text-red-600 bg-red-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const Icon = getIcon();
  const colorClasses = getColorClasses();

  return (
    <BaseCard 
      to={`/alerts/${alert.id}`}
      className="hover:bg-gray-50"
      aria-label={`Alerte pour ${alert.patient}: ${alert.message}`}
    >
      <div className="p-4 flex items-start space-x-4">
        <div className={`p-2 rounded-full ${colorClasses}`}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">{alert.patient}</p>
            <p className="text-sm text-gray-500">{formatTimeAgo(alert.time)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-600">{alert.message}</p>
          
          {onAction && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onAction(alert.id);
              }}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              Traiter l'alerte
            </button>
          )}
        </div>
      </div>
    </BaseCard>
  );
};

export default AlertCard;