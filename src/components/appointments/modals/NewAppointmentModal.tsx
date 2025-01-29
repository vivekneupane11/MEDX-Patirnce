import React, { useState } from 'react';
import { X } from 'lucide-react';
import AppointmentPatientField from './form/AppointmentPatientField';
import AppointmentDateTimeFields from './form/AppointmentDateTimeFields';
import AppointmentTypeSelect from './form/AppointmentTypeSelect';
import AppointmentModeSelector from './form/AppointmentModeSelector';
import AppointmentLocationField from './form/AppointmentLocationField';
import AppointmentNotesField from './form/AppointmentNotesField';
import { AppointmentFormData } from '../../../types';

interface NewAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (appointmentData: AppointmentFormData) => void;
  selectedDate?: Date | null;
}

const NewAppointmentModal: React.FC<NewAppointmentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  selectedDate,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
    time: '',
    type: 'consultation',
    mode: 'presentiel',
    location: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.patientName) newErrors.patientName = 'Le nom du patient est requis';
    if (!formData.date) newErrors.date = 'La date est requise';
    if (!formData.time) newErrors.time = 'L\'heure est requise';
    if (!formData.location) {
      newErrors.location = formData.mode === 'presentiel' 
        ? 'L\'adresse est requise'
        : 'Le lien de visioconférence est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={onClose}
            >
              <span className="sr-only">Fermer</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Nouveau rendez-vous
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <AppointmentPatientField
                  value={formData.patientName}
                  onChange={(value) => setFormData({ ...formData, patientName: value })}
                  error={errors.patientName}
                />

                <AppointmentDateTimeFields
                  date={formData.date}
                  time={formData.time}
                  onDateChange={(value) => setFormData({ ...formData, date: value })}
                  onTimeChange={(value) => setFormData({ ...formData, time: value })}
                  errors={{ date: errors.date, time: errors.time }}
                />

                <AppointmentTypeSelect
                  value={formData.type}
                  onChange={(value) => setFormData({ ...formData, type: value })}
                />

                <AppointmentModeSelector
                  mode={formData.mode}
                  onChange={(mode) => setFormData({ ...formData, mode, location: '' })}
                />

                <AppointmentLocationField
                  mode={formData.mode}
                  value={formData.location}
                  onChange={(value) => setFormData({ ...formData, location: value })}
                  error={errors.location}
                />

                <AppointmentNotesField
                  value={formData.notes}
                  onChange={(value) => setFormData({ ...formData, notes: value })}
                />

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Créer le rendez-vous
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentModal;