import React from 'react';

const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const CalendarWeekHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-7 gap-1 mb-2">
      {weekDays.map(day => (
        <div
          key={day}
          className="text-xs font-medium text-gray-500 text-center py-1"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarWeekHeader;