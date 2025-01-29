import React from 'react';
import { PlusCircle, Clock, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tooltip from '../common/Tooltip';

interface QuickAction {
  icon: any;
  title: string;
  description: string;
  tooltip: string;
  bgColor: string;
  iconColor: string;
  count: number;
  linkTo: string;
}

const actions: QuickAction[] = [
  {
    icon: PlusCircle,
    title: 'Nouvelle installation',
    description: 'Demander au coordinateur',
    tooltip: '3 installations en attente',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    count: 3,
    linkTo: '/prescriptions?status=pending'
  },
  {
    icon: FileText,
    title: 'Nouvelle ordonnance',
    description: 'Créer une prescription',
    tooltip: '2 renouvellements à faire',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    count: 2,
    linkTo: '/prescriptions/new'
  },
  {
    icon: Clock,
    title: 'Rendez-vous',
    description: 'Planifier une visite',
    tooltip: '5 rendez-vous aujourd\'hui',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    count: 5,
    linkTo: '/appointments'
  },
  {
    icon: AlertTriangle,
    title: 'Alertes actives',
    description: '3 notifications',
    tooltip: '2 urgentes, 1 en attente',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
    count: 3,
    linkTo: '/patients?filter=alerts'
  }
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Tooltip key={action.title} content={action.tooltip}>
            <Link
              to={action.linkTo}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className={`p-2 ${action.bgColor} rounded-lg relative`}>
                  <Icon className={`w-6 h-6 ${action.iconColor}`} />
                  {action.count > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {action.count}
                    </span>
                  )}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default QuickActions;