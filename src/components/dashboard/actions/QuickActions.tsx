import React from 'react';
import QuickActionCard from './QuickActionCard';
import { QUICK_ACTIONS } from './config';

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {QUICK_ACTIONS.map((action) => (
        <QuickActionCard
          key={action.title}
          {...action}
        />
      ))}
    </div>
  );
};

export default QuickActions;