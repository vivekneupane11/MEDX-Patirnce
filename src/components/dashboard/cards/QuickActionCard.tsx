import React from 'react';
import { LucideIcon } from 'lucide-react';
import BaseCard from './BaseCard';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  count?: number;
  bgColor: string;
  iconColor: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  title,
  description,
  icon: Icon,
  to,
  count,
  bgColor,
  iconColor
}) => {
  return (
    <BaseCard 
      to={to}
      aria-label={`${title} - ${description}`}
    >
      <div className="p-4">
        <div className="flex items-center">
          <div className="relative flex-shrink-0">
            <div className={`flex items-center justify-center w-10 h-10 ${bgColor} rounded-xl`}>
              <Icon className={`w-5 h-5 ${iconColor}`} />
            </div>
            {count !== undefined && count > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {count}
              </span>
            )}
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {title}
            </h3>
            <p className="mt-1 text-xs text-gray-500 truncate">
              {description}
            </p>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default QuickActionCard;