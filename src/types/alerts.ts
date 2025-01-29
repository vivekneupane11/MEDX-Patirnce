export interface Alert {
  id: number;
  type: 'urgent' | 'warning' | 'info';
  patient: string;
  message: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}