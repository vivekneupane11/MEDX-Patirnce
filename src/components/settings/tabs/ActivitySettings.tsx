import React from 'react';
import { Clock, User, FileText, Settings } from 'lucide-react';

interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  icon: any;
}

const mockActivities: Activity[] = [
  {
    id: 1,
    user: 'Jean Dupont',
    action: 'a créé une nouvelle ordonnance pour',
    target: 'Marie Martin',
    timestamp: 'Il y a 2 heures',
    icon: FileText,
  },
  {
    id: 2,
    user: 'Marie Martin',
    action: 'a planifié un rendez-vous avec',
    target: 'Pierre Dubois',
    timestamp: 'Il y a 3 heures',
    icon: Clock,
  },
  {
    id: 3,
    user: 'Admin',
    action: 'a modifié les permissions de',
    target: 'Jean Dupont',
    timestamp: 'Il y a 5 heures',
    icon: Settings,
  },
];

const ActivitySettings = () => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-6">Historique des activités</h2>

      <div className="flow-root">
        <ul className="-mb-8">
          {mockActivities.map((activity, activityIdx) => {
            const Icon = activity.icon;
            return (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== mockActivities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center ring-8 ring-white">
                        <Icon className="h-5 w-5 text-blue-500" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">{activity.user}</span>
                          {' '}{activity.action}{' '}
                          <span className="font-medium text-gray-900">{activity.target}</span>
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        {activity.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActivitySettings;