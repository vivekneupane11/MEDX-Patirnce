import React, { useState, useMemo } from 'react';
import AlertCard from './AlertCard';
import SectionHeader from '../sections/SectionHeader';
import AlertsFilter from './AlertsFilter';
import AlertHandlingModal from '../../modals/AlertHandlingModal';
import { useAlerts } from '../../../hooks/useAlerts';
import { Alert } from '../../../types';

const mockAlerts: Alert[] = [
  {
    id: 1,
    type: 'urgent',
    patient: 'Pierre Dubois',
    message: 'Problème technique avec le concentrateur',
    time: '2024-03-15T10:00:00',
    priority: 'high'
  },
  {
    id: 2,
    type: 'warning',
    patient: 'Marie Martin',
    message: 'Renouvellement d\'ordonnance nécessaire',
    time: '2024-03-15T08:00:00',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'info',
    patient: 'Jean Dupont',
    message: 'Installation prévue pour demain',
    time: '2024-03-15T07:00:00',
    priority: 'low'
  },
];

const AlertsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const {
    selectedAlert,
    showModal,
    handleAlertAction,
    handleCloseModal,
    handleResolveAlert,
  } = useAlerts();
  
  const filteredAlerts = useMemo(() => {
    if (filter === 'all') return mockAlerts;
    return mockAlerts.filter(alert => alert.type === filter);
  }, [filter]);

  const urgentCount = mockAlerts.filter(alert => alert.type === 'urgent').length;

  return (
    <section className="bg-white rounded-lg shadow-sm">
      <SectionHeader 
        title="Alertes récentes"
        description={`${mockAlerts.length} alertes, dont ${urgentCount} urgentes`}
      >
        <AlertsFilter value={filter} onChange={setFilter} />
      </SectionHeader>

      <div className="divide-y divide-gray-200">
        {filteredAlerts.map((alert) => (
          <AlertCard
            key={alert.id}
            alert={alert}
            onAction={() => handleAlertAction(alert)}
          />
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          Aucune alerte ne correspond aux critères sélectionnés
        </div>
      )}

      <AlertHandlingModal
        isOpen={showModal}
        onClose={handleCloseModal}
        alert={selectedAlert}
        onSubmit={handleResolveAlert}
      />
    </section>
  );
};

export default AlertsSection;