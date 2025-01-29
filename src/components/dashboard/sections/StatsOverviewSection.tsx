import React from 'react';
import StatisticCard from '../cards/StatisticCard';
import { STAT_CARDS } from '../../../config/statistics';
import { Statistics } from '../../../types';

interface StatsOverviewSectionProps {
  stats: Statistics;
}

const StatsOverviewSection: React.FC<StatsOverviewSectionProps> = ({ stats }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Vue d'ensemble</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CARDS.map((card) => (
          <StatisticCard
            key={card.title}
            {...card}
            value={card.value(stats)}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsOverviewSection;