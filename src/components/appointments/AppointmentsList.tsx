import React, { useState } from 'react';
import { Appointment } from '../../types';
import { Calendar, Plus } from 'lucide-react';

const AppointmentsList: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b flex justify-between items-center">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Rendez-vous</h3>
        </div>
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nouveau rendez-vous
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-center">
          Chargement des rendez-vous...
        </p>
      </div>
    </div>
  );
};

export default AppointmentsList;