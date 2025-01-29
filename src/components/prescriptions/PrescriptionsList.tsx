import React, { useState, useMemo } from 'react';
import { Prescription } from '../../types';
import PrescriptionsHeader from './PrescriptionsHeader';
import PrescriptionCard from './PrescriptionCard';
import PrescriptionFilters from './PrescriptionFilters';
import NewPrescriptionModal from '../modals/NewPrescriptionModal';

const mockPrescriptions: Prescription[] = [
  {
    id: 1,
    patientName: 'Jean Dupont',
    deviceType: 'Concentrateur d\'oxygène 5L',
    createdAt: '2024-03-15',
    expiresAt: '2024-06-15',
    status: 'active',
    instructions: 'Utilisation quotidienne, 15h/jour',
  },
  {
    id: 2,
    patientName: 'Marie Martin',
    deviceType: 'Ventilation',
    createdAt: '2024-03-10',
    expiresAt: '2024-04-10',
    status: 'expiring',
    instructions: 'Utilisation nocturne uniquement',
  },
  {
    id: 3,
    patientName: 'Pierre Dubois',
    deviceType: 'Masque nasal',
    createdAt: '2024-02-15',
    expiresAt: '2024-03-15',
    status: 'expired',
    instructions: 'À renouveler',
  },
];

const PrescriptionsList = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPrescriptionModal, setShowNewPrescriptionModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const filteredPrescriptions = useMemo(() => {
    return mockPrescriptions.filter(prescription => {
      const matchesSearch = prescription.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prescription.deviceType.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === 'all' || prescription.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  const handleNewPrescription = () => {
    setSelectedPrescription(null);
    setShowNewPrescriptionModal(true);
  };

  const handleRenew = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setShowNewPrescriptionModal(true);
  };

  const handlePrescriptionSubmit = (prescriptionData: any) => {
    console.log('New/Renewed prescription:', prescriptionData);
    setShowNewPrescriptionModal(false);
    setSelectedPrescription(null);
  };

  const handleDownload = (id: number) => {
    console.log('Downloading prescription:', id);
  };

  const handleShare = (id: number) => {
    console.log('Sharing prescription:', id);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <PrescriptionsHeader
        totalPrescriptions={mockPrescriptions.length}
        expiringCount={mockPrescriptions.filter(p => p.status === 'expiring').length}
        onNewPrescription={handleNewPrescription}
      />
      
      <PrescriptionFilters onFilterChange={setFilter} />

      <div className="divide-y divide-gray-200">
        {filteredPrescriptions.map((prescription) => (
          <PrescriptionCard
            key={prescription.id}
            prescription={prescription}
            onRenew={() => handleRenew(prescription)}
            onDownload={() => handleDownload(prescription.id)}
            onShare={() => handleShare(prescription.id)}
          />
        ))}
      </div>

      {filteredPrescriptions.length === 0 && (
        <div className="py-8 text-center text-gray-500">
          Aucune ordonnance ne correspond aux critères sélectionnés
        </div>
      )}

      <NewPrescriptionModal
        isOpen={showNewPrescriptionModal}
        onClose={() => {
          setShowNewPrescriptionModal(false);
          setSelectedPrescription(null);
        }}
        onSubmit={handlePrescriptionSubmit}
        prescription={selectedPrescription}
      />
    </div>
  );
};

export default PrescriptionsList;