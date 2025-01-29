import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrendIndicatorProps {
  value: number;
  isPositive: boolean;
}

const TrendIndicator: React.FC<TrendIndicatorProps> = ({ value, isPositive }) => {
  const Icon = isPositive ? TrendingUp : TrendingDown;
  const color = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`flex items-center space-x-1 ${color}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{value}% vs mois dernier</span>
    </div>
  );
};

export default TrendIndicator;