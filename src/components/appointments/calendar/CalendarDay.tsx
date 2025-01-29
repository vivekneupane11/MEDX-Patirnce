import React from 'react';
import { Appointment } from '../../../types';
import AppointmentDot from './AppointmentDot';
import Tooltip from '../../common/Tooltip';

interface CalendarDayProps {
  date: Date;
  appointments: Appointment[];
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  appointments,
  isCurrentMonth,
  isToday,
  isSelected,
  onClick,
}) => {
  const getAppointmentSummary = () => {
    if (appointments.length === 0) return null;
    return (
      <ul className="text-xs">
        {appointments.map(apt => (
          <li key={apt.id}>
            {apt.time} - {apt.patientName}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Tooltip content={getAppointmentSummary()}>
      <button
        onClick={onClick}
        className={`
          w-full h-24 p-2 border relative
          transition-all duration-200
          ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'}
          ${isToday ? 'border-blue-500' : 'border-gray-200'}
          ${isSelected ? 'ring-2 ring-blue-500' : ''}
          ${isCurrentMonth ? 'hover:bg-blue-50' : 'cursor-not-allowed'}
          rounded-lg
        `}
        disabled={!isCurrentMonth}
      >
        <span
          className={`
            text-sm font-medium
            ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
            ${isToday ? 'text-blue-600' : ''}
          `}
        >
          {date.getDate()}
        </span>
        
        {appointments.length > 0 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
            {appointments.slice(0, 3).map((apt) => (
              <AppointmentDot key={apt.id} status={apt.status} />
            ))}
            {appointments.length > 3 && (
              <span className="text-xs text-gray-500">+{appointments.length - 3}</span>
            )}
          </div>
        )}
      </button>
    </Tooltip>
  );
};

export default CalendarDay;