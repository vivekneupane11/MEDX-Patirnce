import React from 'react';
import { AlertCircle, AlertTriangle, Bell } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'urgent',
    patient: 'Pierre Dubois',
    message: 'Problème technique avec le concentrateur',
    time: 'Il y a 1 heure',
  },
  {
    id: 2,
    type: 'warning',
    patient: 'Marie Martin',
    message: 'Renouvellement d\'ordonnance nécessaire',
    time: 'Il y a 3 heures',
  },
  {
    id: 3,
    type: 'info',
    patient: 'Jean Dupont',
    message: 'Installation prévue pour demain',
    time: 'Il y a 5 heures',
  },
];

const AlertsSection = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b flex justify-between items-center">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Alertes récentes</h3>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
      <ul className="divide-y divide-gray-200">
        {alerts.map((alert) => (
          <li key={alert.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
            <div className="flex items-start">
              {alert.type === 'urgent' ? (
                <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
              ) : alert.type === 'warning' ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
              ) : (
                <Bell className="h-5 w-5 text-blue-500 mt-1" />
              )}
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{alert.patient}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">{alert.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsSection;