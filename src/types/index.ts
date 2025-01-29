// Appointment types
export interface Appointment {
  id: number;
  patientName: string;
  type: 'consultation' | 'followup' | 'technical' | 'renewal';
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  notes?: string;
  mode: 'presentiel' | 'distanciel';
  location: string;
}

export interface AppointmentFormData {
  patientName: string;
  date: string;
  time: string;
  type: string;
  mode: 'presentiel' | 'distanciel';
  location: string;
  notes: string;
}

// Calendar types
export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  hasAppointments: boolean;
  appointments: Appointment[];
}

// Statistics types
export interface Statistics {
  totalInterventions: number;
  totalPatients: number;
  documentsProcessed: number;
  satisfactionRate: number;
}

export interface Trend {
  value: number;
  isPositive: boolean;
}

// Patient comment types
export interface PatientComment {
  patient: string;
  text: string;
  rating: number;
  date: string;
}

// Card types
export interface CardProps {
  onClick: () => void;
  className?: string;
}