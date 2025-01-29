import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardWrapperProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  icon: Icon,
  children,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
    >
      <div className="flex items-center space-x-2 mb-4">
        <Icon className="w-5 h-5" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default CardWrapper;