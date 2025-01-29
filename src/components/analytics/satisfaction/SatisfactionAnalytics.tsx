import React, { useState } from 'react';
import CommentTable from './CommentTable';
import WordCloud from './WordCloud';
import { PatientComment } from '../../../types';

// Mock data
const mockComments: PatientComment[] = [
  {
    patient: "Jean Dupont",
    text: "Excellent suivi, équipe très réactive et professionnelle.",
    rating: 5,
    date: "2024-03-15"
  },
  {
    patient: "Marie Martin",
    text: "Délai un peu long, mais très professionnel dans l'ensemble.",
    rating: 3,
    date: "2024-03-14"
  },
  {
    patient: "Pierre Dubois",
    text: "Très satisfait de l'intervention et du suivi.",
    rating: 4,
    date: "2024-03-13"
  }
];

const SatisfactionAnalytics: React.FC = () => {
  const [period, setPeriod] = useState<'month' | 'semester' | 'year'>('month');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Satisfaction des patients</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value as 'month' | 'semester' | 'year')}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="month">Ce mois</option>
          <option value="semester">6 derniers mois</option>
          <option value="year">Cette année</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommentTable comments={mockComments} />
        <WordCloud comments={mockComments} period={period} />
      </div>
    </div>
  );
};

export default SatisfactionAnalytics;