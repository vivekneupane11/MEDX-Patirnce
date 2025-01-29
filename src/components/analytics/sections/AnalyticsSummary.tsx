import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface AnalyticsSummaryProps {
  stats: {
    totalInterventions: number;
    totalPatients: number;
    documentsProcessed: number;
    satisfactionRate: number;
  };
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ stats }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Résumé des performances</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <TrendingUp className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <p className="text-gray-900">
              <span className="font-medium">Augmentation des interventions :</span> +12% par rapport au mois dernier
            </p>
            <p className="text-sm text-gray-600">
              La majorité concerne des consultations de suivi (65%)
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
          <div>
            <p className="text-gray-900">
              <span className="font-medium">Distribution des patients :</span> 56% suivis par le prestataire A
            </p>
            <p className="text-sm text-gray-600">
              Recommandation : diversifier la répartition des patients entre les prestataires
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <TrendingDown className="w-5 h-5 text-red-500 mt-1" />
          <div>
            <p className="text-gray-900">
              <span className="font-medium">Points d'attention :</span> 3 patients ont des retards de suivi critiques
            </p>
            <p className="text-sm text-gray-600">
              Action requise : planifier des rendez-vous de rattrapage dans les 7 jours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummary;