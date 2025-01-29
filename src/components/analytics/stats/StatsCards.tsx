import React from 'react';
import InterventionsCard from '../cards/InterventionsCard';
import PatientsCard from '../cards/PatientsCard';
import DocumentsCard from '../cards/DocumentsCard';
import SatisfactionCard from '../cards/SatisfactionCard';
import { Statistics } from '../../../types';

interface StatsCardsProps {
  stats: Statistics;
  onCardClick: (path: string) => void;
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <InterventionsCard
        total={stats.totalInterventions}
        trend={{ value: 12, isPositive: true }}
        onClick={() => onCardClick('/analytics/interventions')}
      />
      <PatientsCard
        total={stats.totalPatients}
        trend={{ value: 8, isPositive: true }}
        onClick={() => onCardClick('/analytics/patients')}
      />
      <DocumentsCard
        total={stats.documentsProcessed}
        trend={{ value: 5, isPositive: true }}
        onClick={() => onCardClick('/analytics/documents')}
      />
      <SatisfactionCard
        rate={stats.satisfactionRate}
        trend={{ value: 3, isPositive: true }}
        onClick={() => onCardClick('/analytics/satisfaction')}
      />
    </div>
  );
};

export default StatsCards;