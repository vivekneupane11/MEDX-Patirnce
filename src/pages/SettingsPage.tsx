import React from 'react';
import SettingsTabs from '../components/settings/SettingsTabs';
import SearchBar from '../components/dashboard/search/SearchBar';

const SettingsPage = () => {
  const handleSearch = (query: string) => {
    console.log('Searching settings:', query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} placeholder="Rechercher dans les paramètres..." />
      </div>
      <SettingsTabs />
    </div>
  );
};

export default SettingsPage;