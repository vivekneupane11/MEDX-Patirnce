import React from 'react';
import { weekDays } from '../../../data/mockData';
import { CalendarDay } from '../../../types';
import CalendarDayCell from './CalendarDayCell';

interface CalendarGridProps {
  days: CalendarDay[];
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  selectedDate,
  onSelectDate,
}) => {
  return (
    <div className="p-4">
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

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <CalendarDayCell
            key={index}
            day={day}
            isSelected={selectedDate?.getDate() === day.date.getDate() &&
                       selectedDate?.getMonth() === day.date.getMonth()}
            onSelect={() => onSelectDate(day.date)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;