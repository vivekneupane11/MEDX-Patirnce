import React from 'react';
import PatientsList from '../components/dashboard/patients/PatientsList';
import SearchBar from '../components/dashboard/search/SearchBar';

const PatientsPage = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} placeholder="Rechercher un patient..." />
      </div>

      {/* Full-width Patients List */}
      <PatientsList />
    </div>
  );
};

export default PatientsPage;