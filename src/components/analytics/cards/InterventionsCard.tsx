import React from 'react';
import { Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CardWrapper from './CardWrapper';
import TrendIndicator from '../common/TrendIndicator';
import { formatNumber } from '../../../utils/formatters';

const interventionsData = [
  { type: "Consultations", value: 65 },
  { type: "Visites techniques", value: 25 },
  { type: "Autres", value: 10 },
];

interface InterventionsCardProps {
  total: number;
  trend: { value: number; isPositive: boolean };
  onClick: () => void;
}

const InterventionsCard: React.FC<InterventionsCardProps> = ({ total, trend, onClick }) => {
  return (
    <CardWrapper
      title="Total Interventions"
      icon={Activity}
      onClick={onClick}
      className="bg-blue-50"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{formatNumber(total)}</p>
            <TrendIndicator value={trend.value} isPositive={trend.isPositive} />
          </div>
        </div>

        <p className="text-sm text-gray-600">
          La majorité des interventions concerne des consultations de suivi (65%), 
          suivies des visites techniques (25%).
        </p>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={interventionsData}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
          <div>
            <span className="font-medium text-blue-600">65%</span>
            <br />Consultations
          </div>
          <div>
            <span className="font-medium text-blue-600">25%</span>
            <br />Visites techniques
          </div>
          <div>
            <span className="font-medium text-blue-600">10%</span>
            <br />Autres
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default InterventionsCard;