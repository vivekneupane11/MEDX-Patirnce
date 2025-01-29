import { PlusCircle, FileText, Clock, AlertTriangle } from 'lucide-react';
import { QuickActionConfig } from '../types';

export const QUICK_ACTIONS: QuickActionConfig[] = [
  {
    title: 'Nouvelle installation',
    description: 'Demander au coordinateur',
    icon: PlusCircle,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    count: 3,
    to: '/prescriptions?status=pending'
  },
  {
    title: 'Nouvelle ordonnance',
    description: 'Créer une prescription',
    icon: FileText,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    count: 2,
    to: '/prescriptions/new'
  },
  {
    title: 'Rendez-vous',
    description: 'Planifier une visite',
    icon: Clock,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    count: 5,
    to: '/appointments'
  },
  {
    title: 'Alertes actives',
    description: '3 notifications',
    icon: AlertTriangle,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    count: 3,
    to: '/patients?filter=alerts'
  }
];