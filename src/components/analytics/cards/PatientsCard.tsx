import React from 'react';
import { Users } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import CardWrapper from './CardWrapper';
import TrendIndicator from '../common/TrendIndicator';
import { formatNumber } from '../../../utils/formatters';

const patientsData = [
  { name: "Prestataire A", value: 56 },
  { name: "Prestataire B", value: 30 },
  { name: "Prestataire C", value: 14 },
];

const COLORS = ['#10B981', '#34D399', '#6EE7B7'];

interface PatientsCardProps {
  total: number;
  trend: { value: number; isPositive: boolean };
  onClick: () => void;
}

const PatientsCard: React.FC<PatientsCardProps> = ({ total, trend, onClick }) => {
  return (
    <CardWrapper
      title="Patients Suivis"
      icon={Users}
      onClick={onClick}
      className="bg-green-50"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{formatNumber(total)}</p>
            <TrendIndicator value={trend.value} isPositive={trend.isPositive} />
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Les prestataires A et B prennent en charge la majorité des suivis, 
          représentant 86% des patients.
        </p>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={patientsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {patientsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
          {patientsData.map((item, index) => (
            <div key={item.name}>
              <span className="font-medium text-green-600">{item.value}%</span>
              <br />{item.name}
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default PatientsCard;