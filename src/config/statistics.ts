import { Activity, Calendar, Wrench, ThumbsUp } from 'lucide-react';
import { StatCardConfig } from '../types';
import { Statistics } from '../types';

export const STAT_CARDS: StatCardConfig[] = [
  {
    title: "Installations en attente",
    value: (stats: Statistics) => stats.pendingInstallations,
    icon: Activity,
    trend: { value: 12, isPositive: true },
    to: '/prescriptions?status=pending',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: "RDV cette semaine",
    value: (stats: Statistics) => stats.weeklyAppointments,
    icon: Calendar,
    to: '/appointments?filter=thisWeek',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    title: "Problèmes techniques",
    value: (stats: Statistics) => stats.technicalIssues,
    icon: Wrench,
    trend: { value: 8, isPositive: false },
    to: '/communication?type=technical',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    title: "Satisfaction client",
    value: (stats: Statistics) => `${stats.satisfactionRate}%`,
    icon: ThumbsUp,
    trend: { value: 5, isPositive: true },
    to: '/analytics?view=satisfaction',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  }
];