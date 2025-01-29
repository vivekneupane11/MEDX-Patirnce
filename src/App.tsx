import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import PatientsPage from './pages/PatientsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import PrescriptionsPage from './pages/PrescriptionsPage';
import SettingsPage from './pages/SettingsPage';
import CommunicationPage from './pages/CommunicationPage';
import AnalyticsPage from './pages/AnalyticsPage';
import InterventionsAnalytics from './pages/analytics/InterventionsPage';
import PatientsAnalytics from './pages/analytics/PatientsPage';
import DocumentsAnalytics from './pages/analytics/DocumentsPage';
import SatisfactionAnalytics from './pages/analytics/SatisfactionPage';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/prescriptions" element={<PrescriptionsPage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/analytics/interventions" element={<InterventionsAnalytics />} />
          <Route path="/analytics/patients" element={<PatientsAnalytics />} />
          <Route path="/analytics/documents" element={<DocumentsAnalytics />} />
          <Route path="/analytics/satisfaction" element={<SatisfactionAnalytics />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;