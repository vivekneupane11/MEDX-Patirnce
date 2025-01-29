import React from 'react';
import { AlertCircle, AlertTriangle, Bell } from 'lucide-react';

interface AlertIconProps {
  type: 'urgent' | 'warning' | 'info';
  className?: string;
}

const AlertIcon: React.FC<AlertIconProps> = ({ type, className = 'h-5 w-5' }) => {
  const icons = {
    urgent: <AlertCircle className={`${className} text-red-500`} />,
    warning: <AlertTriangle className={`${className} text-yellow-500`} />,
    info: <Bell className={`${className} text-blue-500`} />,
  };

  return icons[type];
};

export default AlertIcon;