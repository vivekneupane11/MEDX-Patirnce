import React from 'react';
import StatsOverview from './stats/StatsOverview';
import QuickActions from './actions/QuickActions';
import PatientsList from './patients/PatientsList';
import AlertsSection from './alerts/AlertsSection';
import SearchBar from './search/SearchBar';
import { mockStats } from '../../data/mockData';

const DashboardLayout: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching:', query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <span className="text-blue-600">Tableau de bord</span>
          </li>
        </ol>
      </nav>

      {/* Search Bar */}
      <div className="relative">
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Rechercher un patient, une alerte, un rendez-vous..." 
        />
      </div>

      {/* Stats Overview */}
      <StatsOverview stats={mockStats} />

      {/* Quick Actions */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
        <QuickActions />
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Patients List */}
        <div className="lg:col-span-2">
          <PatientsList />
        </div>

        {/* Alerts Section */}
        <div>
          <AlertsSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;