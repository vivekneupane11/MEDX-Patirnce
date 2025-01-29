import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CardWrapper from './CardWrapper';
import TrendIndicator from '../common/TrendIndicator';

const satisfactionData = [
  { month: 'Jan', satisfaction: 86 },
  { month: 'Fév', satisfaction: 85 },
  { month: 'Mar', satisfaction: 87 },
  { month: 'Avr', satisfaction: 86 },
  { month: 'Mai', satisfaction: 88 },
  { month: 'Juin', satisfaction: 89 },
];

interface SatisfactionCardProps {
  rate: number;
  trend: { value: number; isPositive: boolean };
  onClick: () => void;
}

const SatisfactionCard: React.FC<SatisfactionCardProps> = ({ rate, trend, onClick }) => {
  return (
    <CardWrapper
      title="Satisfaction Client"
      icon={ThumbsUp}
      onClick={onClick}
      className="bg-purple-50"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">{rate}%</p>
            <TrendIndicator value={trend.value} isPositive={trend.isPositive} />
          </div>
        </div>

        <p className="text-sm text-gray-600">
          La satisfaction client s'améliore continuellement, avec une note 
          particulièrement élevée pour la réactivité des interventions.
        </p>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={satisfactionData}>
              <XAxis dataKey="month" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                stroke="#9333EA" 
                strokeWidth={2}
                dot={{ fill: '#9333EA' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
          <div>
            <span className="font-medium text-purple-600">95%</span>
            <br />Satisfaction réactivité
          </div>
          <div>
            <span className="font-medium text-purple-600">88%</span>
            <br />Satisfaction qualité
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default SatisfactionCard;