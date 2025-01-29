import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCards from './stats/StatsCards';
import SatisfactionAnalytics from './satisfaction/SatisfactionAnalytics';
import { mockStats } from '../../data/mockData';

const AnalyticsPanel = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="space-y-8">
      <StatsCards stats={mockStats} onCardClick={handleCardClick} />
      <SatisfactionAnalytics />
    </div>
  );
};

export default AnalyticsPanel;