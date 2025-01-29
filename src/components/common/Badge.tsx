import React from 'react';

interface BadgeProps {
  type: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  const styles = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[type]}`}>
      {children}
    </span>
  );
};

export default Badge;