import React from 'react';
import { LucideIcon } from 'lucide-react';
import BaseCard from './BaseCard';
import TrendIndicator from '../indicators/TrendIndicator';

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  to: string;
  bgColor: string;
  iconColor: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  to,
  bgColor,
  iconColor
}) => {
  return (
    <BaseCard 
      to={to}
      aria-label={`${title}: ${value}`}
    >
      <div className="p-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {trend && <TrendIndicator {...trend} />}
        </div>
        <div className={`p-3 ${bgColor} rounded-full`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </BaseCard>
  );
};

export default StatisticCard;