import React, { useState, useMemo } from 'react';
import { Patient } from '../../../types';
import PatientSearch from './PatientSearch';
import PatientFilters from './PatientFilters';
import PatientActions from './PatientActions';
import PatientCard from './PatientCard';
import NewPrescriptionModal from '../../modals/NewPrescriptionModal';
import ScheduleAppointmentModal from '../../modals/ScheduleAppointmentModal';

const mockPatients: Patient[] = [
  {
    id: 1,
    name: 'Jean Dupont',
    status: 'stable',
    device: 'Concentrateur 5L',
    lastVisit: '15/03/2024',
    nextVisit: '15/04/2024',
  },
  {
    id: 2,
    name: 'Marie Martin',
    status: 'attention',
    device: 'Ventilation',
    lastVisit: '10/03/2024',
    nextVisit: '25/03/2024',
  },
  {
    id: 3,
    name: 'Pierre Dubois',
    status: 'urgent',
    device: 'Oxygénothérapie',
    lastVisit: '05/03/2024',
    nextVisit: '20/03/2024',
  },
];

const PatientsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    treatment: 'all',
    date: 'all',
  });
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const filteredPatients = useMemo(() => {
    return mockPatients.filter(patient => {
      const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          patient.device.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = filters.status === 'all' || patient.status === filters.status;
      const matchesTreatment = filters.treatment === 'all' || patient.device.toLowerCase().includes(filters.treatment);
      
      return matchesSearch && matchesStatus && matchesTreatment;
    });
  }, [searchQuery, filters]);

  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  const handleExport = () => {
    console.log('Exporting patient data...');
  };

  const handleNewPrescription = (patient?: Patient) => {
    if (patient) setSelectedPatient(patient);
    setShowPrescriptionModal(true);
  };

  const handleSchedule = (patient?: Patient) => {
    if (patient) setSelectedPatient(patient);
    setShowScheduleModal(true);
  };

  const handleArchive = () => {
    console.log('Archiving selected patients...');
  };

  const handlePrescriptionSubmit = (prescriptionData: any) => {
    console.log('New prescription:', prescriptionData, 'for patient:', selectedPatient?.name);
    // Handle prescription submission
  };

  const handleAppointmentSubmit = (appointmentData: any) => {
    console.log('New appointment:', appointmentData, 'for patient:', selectedPatient?.name);
    // Handle appointment submission
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Patients</h3>
            <PatientActions
              onExport={handleExport}
              onNewPrescription={() => handleNewPrescription()}
              onSchedule={() => handleSchedule()}
              onArchive={handleArchive}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <PatientSearch onSearch={setSearchQuery} />
            <PatientFilters onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onNewPrescription={() => handleNewPrescription(patient)}
            onSchedule={() => handleSchedule(patient)}
          />
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="py-8 text-center text-gray-500">
          Aucun patient ne correspond aux critères sélectionnés
        </div>
      )}

      <NewPrescriptionModal
        isOpen={showPrescriptionModal}
        onClose={() => {
          setShowPrescriptionModal(false);
          setSelectedPatient(null);
        }}
        onSubmit={handlePrescriptionSubmit}
        patientName={selectedPatient?.name}
      />

      <ScheduleAppointmentModal
        isOpen={showScheduleModal}
        onClose={() => {
          setShowScheduleModal(false);
          setSelectedPatient(null);
        }}
        onSubmit={handleAppointmentSubmit}
        patientName={selectedPatient?.name}
      />
    </div>
  );
};

export default PatientsList;