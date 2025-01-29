import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardHeaderProps {
  title: string;
  icon: LucideIcon;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, icon: Icon, value, trend }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5" />
          <h3 className="analytics-card-title">{title}</h3>
        </div>
      </div>
      <div className="analytics-card-number">{value}</div>
      {trend && (
        <div className={`flex items-center space-x-1 ${
          trend.isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          <span className="text-sm">
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-gray-500">vs mois dernier</span>
        </div>
      )}
    </div>
  );
};

export default CardHeader;