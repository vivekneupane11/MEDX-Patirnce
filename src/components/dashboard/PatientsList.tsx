import React from 'react';
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Jean Dupont',
    status: 'stable',
    device: 'Concentrateur 5L',
    lastVisit: '15/03/2024',
    nextVisit: '15/04/2024',
  },
  {
    id: 2,
    name: 'Marie Martin',
    status: 'attention',
    device: 'Ventilation',
    lastVisit: '10/03/2024',
    nextVisit: '25/03/2024',
  },
  {
    id: 3,
    name: 'Pierre Dubois',
    status: 'urgent',
    device: 'Oxygénothérapie',
    lastVisit: '05/03/2024',
    nextVisit: '20/03/2024',
  },
];

const statusIcons = {
  stable: { icon: CheckCircle, className: 'text-green-500' },
  attention: { icon: AlertTriangle, className: 'text-yellow-500' },
  urgent: { icon: AlertCircle, className: 'text-red-500' },
};

const PatientsList = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Patients récents</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {patients.map((patient) => {
          const StatusIcon = statusIcons[patient.status].icon;
          return (
            <li key={patient.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <StatusIcon className={`h-5 w-5 ${statusIcons[patient.status].className}`} />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                    <p className="text-sm text-gray-500">{patient.device}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Dernière visite</p>
                    <p className="text-sm font-medium text-gray-900">{patient.lastVisit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Prochain RDV</p>
                    <p className="text-sm font-medium text-gray-900">{patient.nextVisit}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Voir détails
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PatientsList;