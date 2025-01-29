import { useState, useCallback } from 'react';
import { Alert } from '../types';

export const useAlerts = () => {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleAlertAction = useCallback((alert: Alert) => {
    setSelectedAlert(alert);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedAlert(null);
    setShowModal(false);
  }, []);

  const handleResolveAlert = useCallback((
    id: number, 
    resolution: string, 
    action: string
  ) => {
    // Ici, vous pouvez implémenter la logique pour mettre à jour l'état de l'alerte
    console.log('Alert resolved:', { id, resolution, action });
    handleCloseModal();
  }, [handleCloseModal]);

  return {
    selectedAlert,
    showModal,
    handleAlertAction,
    handleCloseModal,
    handleResolveAlert,
  };
};