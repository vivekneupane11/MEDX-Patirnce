import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow ${className}`}>
      <div className="flex items-center space-x-2">
        <Icon className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
};

export default StatCard;