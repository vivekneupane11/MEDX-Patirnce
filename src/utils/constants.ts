// Navigation items
export const NAV_ITEMS = [
  { name: 'Tableau de bord', icon: 'Menu', current: true },
  { name: 'Patients', icon: 'Users' },
  { name: 'Rendez-vous', icon: 'Calendar' },
  { name: 'Prescriptions', icon: 'FileText' },
  { name: 'Paramètres', icon: 'Settings' },
];

// Status configurations
export const STATUS_CONFIG = {
  stable: { icon: 'CheckCircle', className: 'text-green-500', label: 'Stable' },
  attention: { icon: 'AlertTriangle', className: 'text-yellow-500', label: 'Attention requise' },
  urgent: { icon: 'AlertCircle', className: 'text-red-500', label: 'Urgent' },
};