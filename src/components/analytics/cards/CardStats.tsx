import React from 'react';

interface Stat {
  label: string;
  value: string | number;
  color?: string;
}

interface CardStatsProps {
  stats: Stat[];
}

const CardStats: React.FC<CardStatsProps> = ({ stats }) => {
  return (
    <div className="analytics-card-stats">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`analytics-card-stat-value ${stat.color || 'text-gray-900'}`}>
            {stat.value}
          </div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CardStats;