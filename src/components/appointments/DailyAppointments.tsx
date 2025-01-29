import React from 'react';
import { Clock, User, FileText } from 'lucide-react';
import { Appointment } from '../../types';
import AppointmentStatusBadge from './AppointmentStatusBadge';

interface DailyAppointmentsProps {
  appointments: Appointment[];
  date: Date;
}

const DailyAppointments: React.FC<DailyAppointmentsProps> = ({ appointments, date }) => {
  const sortedAppointments = [...appointments].sort((a, b) => 
    a.time.localeCompare(b.time)
  );

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-3 border-b">
        <h3 className="text-lg font-medium text-gray-900">
          Rendez-vous du {date.toLocaleDateString('fr-FR', { 
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          })}
        </h3>
      </div>

      <div className="divide-y divide-gray-200">
        {sortedAppointments.length > 0 ? (
          sortedAppointments.map((appointment) => (
            <div key={appointment.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm font-medium">{appointment.time}</span>
                </div>
                <AppointmentStatusBadge status={appointment.status} />
              </div>
              
              <div className="flex items-start space-x-3">
                <User className="h-4 w-4 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {appointment.patientName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {appointment.type === 'consultation' ? 'Consultation' :
                     appointment.type === 'followup' ? 'Suivi' :
                     appointment.type === 'technical' ? 'Visite technique' :
                     'Renouvellement'}
                  </p>
                </div>
              </div>

              {appointment.notes && (
                <div className="mt-2 flex items-start text-sm text-gray-500">
                  <FileText className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                  <p>{appointment.notes}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            Aucun rendez-vous prévu ce jour
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyAppointments;