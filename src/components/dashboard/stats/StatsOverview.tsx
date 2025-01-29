import React from 'react';
import { Activity, Calendar, Wrench, ThumbsUp } from 'lucide-react';
import StatCard from './StatCard';
import { Statistics } from '../../../types';

const STAT_CARDS = [
  {
    title: "Installations en attente",
    value: (stats: Statistics) => stats.pendingInstallations,
    icon: Activity,
    trend: { value: 12, isPositive: true },
    linkTo: '/prescriptions?status=pending',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: "RDV cette semaine",
    value: (stats: Statistics) => stats.weeklyAppointments,
    icon: Calendar,
    linkTo: '/appointments?filter=thisWeek',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    title: "Problèmes techniques",
    value: (stats: Statistics) => stats.technicalIssues,
    icon: Wrench,
    trend: { value: 8, isPositive: false },
    linkTo: '/communication?type=technical',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    title: "Satisfaction client",
    value: (stats: Statistics) => `${stats.satisfactionRate}%`,
    icon: ThumbsUp,
    trend: { value: 5, isPositive: true },
    linkTo: '/analytics?view=satisfaction',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  }
];

interface StatsOverviewProps {
  stats: Statistics;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {STAT_CARDS.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value(stats)}
          icon={card.icon}
          trend={card.trend}
          linkTo={card.linkTo}
          bgColor={card.bgColor}
          iconColor={card.iconColor}
        />
      ))}
    </div>
  );
};

export default StatsOverview;