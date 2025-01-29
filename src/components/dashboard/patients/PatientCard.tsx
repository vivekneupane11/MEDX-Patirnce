import React from 'react';
import { FileText, Calendar } from 'lucide-react';
import PatientStatusBadge from './PatientStatusBadge';
import { Patient } from '../../../types';
import { formatDate } from '../../../utils/formatters';

interface PatientCardProps {
  patient: Patient;
  onNewPrescription: () => void;
  onSchedule: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ 
  patient, 
  onNewPrescription,
  onSchedule 
}) => {
  return (
    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <PatientStatusBadge status={patient.status} />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{patient.name}</p>
            <p className="text-sm text-gray-500">{patient.device}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Dernière visite</p>
            <p className="text-sm font-medium text-gray-900">
              {formatDate(patient.lastVisit)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Prochain RDV</p>
            <p className="text-sm font-medium text-gray-900">
              {formatDate(patient.nextVisit)}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onNewPrescription}
              className="p-2 text-gray-400 hover:text-blue-600"
              title="Nouvelle ordonnance"
            >
              <FileText className="h-5 w-5" />
            </button>
            <button
              onClick={onSchedule}
              className="p-2 text-gray-400 hover:text-blue-600"
              title="Planifier un rendez-vous"
            >
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;