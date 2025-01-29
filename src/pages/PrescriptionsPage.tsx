import React from 'react';
import PrescriptionsList from '../components/prescriptions/PrescriptionsList';
import SearchBar from '../components/dashboard/search/SearchBar';

const PrescriptionsPage = () => {
  const handleSearch = (query: string) => {
    console.log('Searching prescriptions:', query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} placeholder="Rechercher une ordonnance..." />
      </div>
      <PrescriptionsList />
    </div>
  );
};

export default PrescriptionsPage;