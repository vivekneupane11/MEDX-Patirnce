import React, { useState } from 'react';
import { X, AlertCircle, AlertTriangle, Bell, CheckCircle } from 'lucide-react';
import { Alert } from '../../types';

interface AlertHandlingModalProps {
  isOpen: boolean;
  onClose: () => void;
  alert: Alert | null;
  onSubmit: (id: number, resolution: string, action: string) => void;
}

const AlertHandlingModal: React.FC<AlertHandlingModalProps> = ({
  isOpen,
  onClose,
  alert,
  onSubmit,
}) => {
  const [resolution, setResolution] = useState('');
  const [selectedAction, setSelectedAction] = useState('');

  if (!isOpen || !alert) return null;

  const getActions = (type: string) => {
    switch (type) {
      case 'urgent':
        return [
          'Intervention immédiate programmée',
          'Contact du prestataire technique',
          'Escalade au responsable',
        ];
      case 'warning':
        return [
          'Planification d\'un rendez-vous',
          'Envoi d\'un rappel',
          'Contact du patient',
        ];
      default:
        return [
          'Marquer comme lu',
          'Archiver',
          'Transférer à l\'équipe concernée',
        ];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resolution && selectedAction) {
      onSubmit(alert.id, resolution, selectedAction);
      onClose();
    }
  };

  const getIcon = () => {
    switch (alert.type) {
      case 'urgent': return AlertCircle;
      case 'warning': return AlertTriangle;
      default: return Bell;
    }
  };

  const Icon = getIcon();
  const actions = getActions(alert.type);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
             onClick={onClose} />

        <div className="relative bg-white rounded-lg max-w-lg w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Icon className={`h-6 w-6 ${
                alert.type === 'urgent' ? 'text-red-600' :
                alert.type === 'warning' ? 'text-yellow-600' :
                'text-blue-600'
              } mr-2`} />
              <h3 className="text-lg font-medium">Traiter l'alerte</h3>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <p className="text-sm text-gray-500">Patient</p>
              <p className="font-medium">{alert.patient}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500">Message</p>
              <p className="font-medium">{alert.message}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Action à entreprendre
              </label>
              <select
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Sélectionner une action</option>
                {actions.map((action) => (
                  <option key={action} value={action}>{action}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Résolution
              </label>
              <textarea
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Décrivez les actions entreprises..."
                required
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Marquer comme traité
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlertHandlingModal;