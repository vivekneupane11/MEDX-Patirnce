import React from 'react';
import { Calendar, Clock, User, FileText } from 'lucide-react';
import { Appointment } from '../../types';
import AppointmentStatusBadge from './AppointmentStatusBadge';

interface AppointmentCardProps {
  appointment: Appointment;
  onStatusChange: (id: number, status: string) => void;
  onReschedule: (id: number) => void;
  onCancel: (id: number) => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onStatusChange,
  onReschedule,
  onCancel,
}) => {
  return (
    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AppointmentStatusBadge status={appointment.status} />
          <div className="ml-4">
            <div className="flex items-center">
              <User className="h-4 w-4 text-gray-400 mr-2" />
              <p className="text-sm font-medium text-gray-900">{appointment.patientName}</p>
            </div>
            <div className="flex items-center mt-1">
              <Calendar className="h-4 w-4 text-gray-400 mr-2" />
              <p className="text-sm text-gray-500">{appointment.date}</p>
              <Clock className="h-4 w-4 text-gray-400 ml-4 mr-2" />
              <p className="text-sm text-gray-500">{appointment.time}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Type</p>
            <p className="text-sm font-medium text-gray-900">
              {appointment.type === 'consultation' ? 'Consultation' :
               appointment.type === 'followup' ? 'Suivi' :
               appointment.type === 'technical' ? 'Visite technique' :
               'Renouvellement'}
            </p>
          </div>
          
          <div className="flex space-x-2">
            {appointment.status === 'pending' && (
              <>
                <button
                  onClick={() => onStatusChange(appointment.id, 'confirmed')}
                  className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-md hover:bg-green-200"
                >
                  Confirmer
                </button>
                <button
                  onClick={() => onReschedule(appointment.id)}
                  className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200"
                >
                  Replanifier
                </button>
              </>
            )}
            {appointment.status !== 'completed' && appointment.status !== 'cancelled' && (
              <button
                onClick={() => onCancel(appointment.id)}
                className="px-3 py-1 text-sm text-red-700 bg-red-100 rounded-md hover:bg-red-200"
              >
                Annuler
              </button>
            )}
          </div>
        </div>
      </div>
      
      {appointment.notes && (
        <div className="mt-2 flex items-start">
          <FileText className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
          <p className="text-sm text-gray-500">{appointment.notes}</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;