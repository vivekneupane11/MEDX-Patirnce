// Mock statistics
export const mockStats = {
  totalInterventions: 442,
  totalPatients: 156,
  documentsProcessed: 284,
  satisfactionRate: 89,
};

// Mock appointments
export const mockAppointments = [
  {
    id: 1,
    patientName: 'Jean Dupont',
    type: 'consultation',
    date: '2024-03-15',
    time: '09:00',
    status: 'confirmed',
    notes: 'Suivi mensuel',
    mode: 'presentiel',
    location: '8 rue de la Paix, 75002 Paris'
  },
  {
    id: 2,
    patientName: 'Marie Martin',
    type: 'technical',
    date: '2024-03-15',
    time: '14:30',
    status: 'pending',
    notes: 'Vérification du concentrateur',
    mode: 'presentiel',
    location: '15 avenue des Champs-Élysées, 75008 Paris'
  },
  {
    id: 3,
    patientName: 'Pierre Dubois',
    type: 'followup',
    date: '2024-03-16',
    time: '10:00',
    status: 'confirmed',
    notes: 'Consultation de suivi',
    mode: 'distanciel',
    location: 'https://meet.google.com/abc-defg-hij'
  }
] as const;

// Mock comments
export const mockComments = [
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

// Mock week days
export const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] as const;