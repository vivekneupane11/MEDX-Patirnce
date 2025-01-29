import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrendIndicatorProps {
  value: number;
  isPositive: boolean;
}

const TrendIndicator: React.FC<TrendIndicatorProps> = ({ value, isPositive }) => {
  const Icon = isPositive ? TrendingUp : TrendingDown;
  const colorClass = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`mt-2 flex items-center text-sm ${colorClass}`}>
      <Icon className="w-4 h-4 mr-1" />
      <span>{isPositive ? '+' : '-'}{Math.abs(value)}%</span>
      <span className="ml-2 text-gray-500">vs dernier mois</span>
    </div>
  );
};

export default TrendIndicator;