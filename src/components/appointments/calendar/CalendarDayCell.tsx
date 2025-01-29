import React from 'react';
import { CalendarDay } from '../../../types';

interface CalendarDayCellProps {
  day: CalendarDay;
  isSelected: boolean;
  onSelect: () => void;
}

const CalendarDayCell: React.FC<CalendarDayCellProps> = ({
  day,
  isSelected,
  onSelect,
}) => {
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  return (
    <button
      onClick={onSelect}
      className={`
        min-h-[80px] p-2 text-left rounded-lg transition-colors
        ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'}
        ${isSelected ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
        ${isToday(day.date) ? 'border-2 border-blue-500' : 'border border-gray-200'}
      `}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className={`text-sm font-medium ${
            day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          {day.date.getDate()}
        </span>
        {day.appointments.length > 0 && (
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
        )}
      </div>
      {day.appointments.map(appointment => (
        <div
          key={appointment.id}
          className={`
            text-xs p-1 mb-1 rounded truncate
            ${appointment.status === 'confirmed' ? 'bg-green-50 text-green-700' :
              appointment.status === 'pending' ? 'bg-yellow-50 text-yellow-700' :
              'bg-blue-50 text-blue-700'}
          `}
          title={`${appointment.time} - ${appointment.patientName}`}
        >
          {appointment.time} - {appointment.patientName}
        </div>
      ))}
    </button>
  );
};

export default CalendarDayCell;