import React from 'react';
import { FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CardWrapper from './CardWrapper';
import TrendIndicator from '../common/TrendIndicator';
import { formatNumber } from '../../../utils/formatters';

const documentsData = [
  { type: "Ordonnances", value: 45 },
  { type: "Rapports de suivi", value: 30 },
  { type: "Autres", value: 25 },
];

interface DocumentsCardProps {
  total: number;
  trend: { value: number; isPositive: boolean };
  onClick: () => void;
}

const DocumentsCard: React.FC<DocumentsCardProps> = ({ total, trend, onClick }) => {
  return (
    <CardWrapper
      title="Documents Traités"
      icon={FileText}
      onClick={onClick}
      className="bg-orange-50"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{formatNumber(total)}</p>
            <TrendIndicator value={trend.value} isPositive={trend.isPositive} />
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Les ordonnances représentent la majorité des documents traités (45%), 
          suivies des rapports de suivi (30%).
        </p>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={documentsData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="type" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="#F97316" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
          {documentsData.map((item) => (
            <div key={item.type}>
              <span className="font-medium text-orange-600">{item.value}%</span>
              <br />{item.type}
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default DocumentsCard;