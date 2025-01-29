import React from 'react';
import Breadcrumbs from '../components/dashboard/navigation/Breadcrumbs';
import SearchInput from '../components/dashboard/search/SearchInput';
import StatsOverviewSection from '../components/dashboard/sections/StatsOverviewSection';
import QuickActionsSection from '../components/dashboard/sections/QuickActionsSection';
import PatientsList from '../components/dashboard/patients/PatientsList';
import AlertsSection from '../components/dashboard/alerts/AlertsSection';
import DashboardContainer from '../components/dashboard/layout/DashboardContainer';
import ContentGrid from '../components/dashboard/layout/ContentGrid';

const mockStats = {
  pendingInstallations: 5,
  weeklyAppointments: 12,
  technicalIssues: 3,
  satisfactionRate: 92,
};

const Dashboard = () => {
  const handleSearch = (query: string) => {
    console.log('Searching:', query);
  };

  const breadcrumbItems = [
    { label: 'Accueil', to: '/' },
    { label: 'Tableau de bord' }
  ];

  return (
    <DashboardContainer>
      {/* Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Search */}
      <div className="max-w-xl">
        <SearchInput 
          onSearch={handleSearch} 
          placeholder="Rechercher un patient, une alerte, un rendez-vous..." 
        />
      </div>

      {/* Stats Overview */}
      <StatsOverviewSection stats={mockStats} />

      {/* Quick Actions */}
      <QuickActionsSection />

      {/* Main Content Grid */}
      <ContentGrid>
        {/* Patients List */}
        <div className="lg:col-span-2">
          <PatientsList />
        </div>

        {/* Alerts Section */}
        <div>
          <AlertsSection />
        </div>
      </ContentGrid>
    </DashboardContainer>
  );
};

export default Dashboard;