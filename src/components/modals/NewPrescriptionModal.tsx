import React, { useState } from 'react';
import { X, FileText } from 'lucide-react';
import { Provider } from '../../types';
import ProviderSelect from '../prescriptions/providers/ProviderSelect';
import DeviceTypeSelect from '../prescriptions/forms/DeviceTypeSelect';
import DurationInput from '../prescriptions/forms/DurationInput';
import FrequencyInput from '../prescriptions/forms/FrequencyInput';
import InstructionsInput from '../prescriptions/forms/InstructionsInput';

// Mock providers data (replace with real data)
const mockProviders: Provider[] = [
  {
    id: 1,
    name: 'MediOxy Services',
    email: 'contact@medioxy.com',
    phone: '01 23 45 67 89',
    status: 'active',
  },
  {
    id: 2,
    name: 'OxySanté',
    email: 'contact@oxysante.com',
    phone: '01 98 76 54 32',
    status: 'active',
  },
];

interface NewPrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (prescriptionData: any) => void;
  prescription?: any;
  patientName?: string;
}

const NewPrescriptionModal: React.FC<NewPrescriptionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  prescription,
  patientName,
}) => {
  const [formData, setFormData] = useState({
    deviceType: prescription?.deviceType || '',
    duration: prescription?.duration || '',
    frequency: prescription?.frequency || '',
    instructions: prescription?.instructions || '',
    providerId: prescription?.provider?.id || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="relative bg-white rounded-lg max-w-lg w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">
                {prescription ? 'Modifier l\'ordonnance' : 'Nouvelle ordonnance'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {patientName && (
              <div className="mb-4">
                <p className="text-sm text-gray-500">Patient</p>
                <p className="font-medium">{patientName}</p>
              </div>
            )}

            <div className="space-y-4">
              <DeviceTypeSelect
                value={formData.deviceType}
                onChange={(value) => setFormData({ ...formData, deviceType: value })}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Prestataire
                </label>
                <ProviderSelect
                  providers={mockProviders}
                  selectedProviderId={Number(formData.providerId)}
                  onChange={(id) => setFormData({ ...formData, providerId: id })}
                  className="mt-1 block w-full"
                />
              </div>

              <DurationInput
                value={formData.duration}
                onChange={(value) => setFormData({ ...formData, duration: value })}
              />

              <FrequencyInput
                value={formData.frequency}
                onChange={(value) => setFormData({ ...formData, frequency: value })}
              />

              <InstructionsInput
                value={formData.instructions}
                onChange={(value) => setFormData({ ...formData, instructions: value })}
              />
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
              >
                {prescription ? 'Mettre à jour' : 'Créer l\'ordonnance'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPrescriptionModal;