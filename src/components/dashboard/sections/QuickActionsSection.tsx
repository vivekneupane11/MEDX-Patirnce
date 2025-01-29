import React from 'react';
import QuickActionCard from '../cards/QuickActionCard';
import { QUICK_ACTIONS } from '../../../config/quickActions';

const QuickActionsSection: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Actions rapides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {QUICK_ACTIONS.map((action) => (
          <QuickActionCard
            key={action.title}
            {...action}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickActionsSection;