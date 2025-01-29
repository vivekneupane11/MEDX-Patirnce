import React from 'react';
import { Calendar, MapPin, Clock, User } from 'lucide-react';
import { Appointment } from '../../types';
import AppointmentStatusBadge from './AppointmentStatusBadge';

interface NextAppointmentProps {
  appointment: Appointment;
}

const NextAppointment: React.FC<NextAppointmentProps> = ({ appointment }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Votre prochain rendez-vous</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-blue-600 mr-3" />
          <span className="text-gray-900 font-medium">
            {new Date(appointment.date).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-blue-600 mr-3" />
          <span className="text-gray-900">{appointment.time}</span>
        </div>
        <div className="flex items-center">
          <User className="w-5 h-5 text-blue-600 mr-3" />
          <span className="text-gray-900 font-medium">{appointment.patientName}</span>
        </div>
        {appointment.location && (
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-gray-700">{appointment.location}</span>
          </div>
        )}
        <div className="mt-4">
          <AppointmentStatusBadge status={appointment.status} />
        </div>
      </div>
    </div>
  );
};

export default NextAppointment;