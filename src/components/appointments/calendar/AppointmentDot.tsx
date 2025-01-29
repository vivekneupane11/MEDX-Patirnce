import React from 'react';

interface AppointmentDotProps {
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
}

const AppointmentDot: React.FC<AppointmentDotProps> = ({ status }) => {
  const colors = {
    confirmed: 'bg-green-500',
    pending: 'bg-yellow-500',
    cancelled: 'bg-red-500',
    completed: 'bg-blue-500',
  };

  return (
    <div
      className={`w-2 h-2 rounded-full ${colors[status]}`}
      title={status.charAt(0).toUpperCase() + status.slice(1)}
    />
  );
};

export default AppointmentDot;