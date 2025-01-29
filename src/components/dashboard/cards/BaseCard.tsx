import React from 'react';
import { Link } from 'react-router-dom';

interface BaseCardProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ 
  to, 
  className = '', 
  children,
  'aria-label': ariaLabel 
}) => {
  return (
    <Link
      to={to}
      className={`
        block bg-white rounded-xl shadow-sm 
        hover:shadow-md transition-all duration-300 
        transform hover:-translate-y-1 active:scale-98
        ${className}
      `}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default BaseCard;