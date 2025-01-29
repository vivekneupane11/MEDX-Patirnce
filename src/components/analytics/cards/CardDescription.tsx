import React from 'react';

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return (
    <p className={`analytics-card-description ${className}`}>
      {children}
    </p>
  );
};

export default CardDescription;