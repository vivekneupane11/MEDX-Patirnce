import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import Tooltip from '../../common/Tooltip';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  count: number;
  linkTo: string;
  tooltip: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  title,
  description,
  icon: Icon,
  bgColor,
  iconColor,
  count,
  linkTo,
  tooltip
}) => {
  return (
    <Tooltip content={tooltip}>
      <Link
        to={linkTo}
        className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 active:scale-98"
      >
        <div className="p-4">
          <div className="flex items-center">
            <div className="relative flex-shrink-0">
              <div className={`flex items-center justify-center w-10 h-10 ${bgColor} rounded-xl`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {count}
                </span>
              )}
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 truncate">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Tooltip>
  );
};

export default QuickActionCard;