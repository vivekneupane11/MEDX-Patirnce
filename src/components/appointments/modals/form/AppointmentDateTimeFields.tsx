import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface AppointmentDateTimeFieldsProps {
  date: string;
  time: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  errors?: {
    date?: string;
    time?: string;
  };
}

const AppointmentDateTimeFields: React.FC<AppointmentDateTimeFieldsProps> = ({
  date,
  time,
  onDateChange,
  onTimeChange,
  errors,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <div className="mt-1 relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className={`
              pl-10 block w-full rounded-md shadow-sm
              ${errors?.date
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }
            `}
            required
          />
          {errors?.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Heure
        </label>
        <div className="mt-1 relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className={`
              pl-10 block w-full rounded-md shadow-sm
              ${errors?.time
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }
            `}
            required
          />
          {errors?.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDateTimeFields;