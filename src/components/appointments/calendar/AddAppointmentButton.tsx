import React from 'react';
import { Plus } from 'lucide-react';

interface AddAppointmentButtonProps {
  onClick: () => void;
}

const AddAppointmentButton: React.FC<AddAppointmentButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      title="Ajouter un rendez-vous"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
};

export default AddAppointmentButton;