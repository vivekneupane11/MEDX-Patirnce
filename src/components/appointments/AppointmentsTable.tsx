import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import { Appointment } from '../../types';
import AppointmentStatusBadge from './AppointmentStatusBadge';

interface AppointmentsTableProps {
  appointments: Appointment[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({
  appointments,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patient
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date et heure
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
                      {appointment.patientName.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.patientName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(appointment.date).toLocaleDateString('fr-FR')}
                </div>
                <div className="text-sm text-gray-500">{appointment.time}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {appointment.type === 'consultation' ? 'Consultation' :
                   appointment.type === 'followup' ? 'Suivi' :
                   appointment.type === 'technical' ? 'Visite technique' :
                   'Renouvellement'}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <AppointmentStatusBadge status={appointment.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onView(appointment.id)}
                  className="text-blue-600 hover:text-blue-900 mx-2"
                  title="Voir les détails"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onEdit(appointment.id)}
                  className="text-gray-600 hover:text-gray-900 mx-2"
                  title="Modifier"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(appointment.id)}
                  className="text-red-600 hover:text-red-900 mx-2"
                  title="Supprimer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;