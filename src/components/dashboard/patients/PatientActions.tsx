import React from 'react';
import { FileText, Calendar, Archive, Download } from 'lucide-react';

interface PatientActionsProps {
  onExport: () => void;
  onNewPrescription: () => void;
  onSchedule: () => void;
  onArchive: () => void;
}

const PatientActions: React.FC<PatientActionsProps> = ({
  onExport,
  onNewPrescription,
  onSchedule,
  onArchive,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onNewPrescription}
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        <FileText className="h-4 w-4 mr-2" />
        Nouvelle ordonnance
      </button>
      
      <button
        onClick={onSchedule}
        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        <Calendar className="h-4 w-4 mr-2" />
        Planifier RDV
      </button>

      <button
        onClick={onExport}
        className="p-2 text-gray-400 hover:text-gray-500"
        title="Exporter"
      >
        <Download className="h-5 w-5" />
      </button>

      <button
        onClick={onArchive}
        className="p-2 text-gray-400 hover:text-gray-500"
        title="Archiver"
      >
        <Archive className="h-5 w-5" />
      </button>
    </div>
  );
}

export default PatientActions;