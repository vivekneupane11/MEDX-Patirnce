import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentsHeader from '../components/appointments/AppointmentsHeader';
import AppointmentsTable from '../components/appointments/AppointmentsTable';
import NextAppointment from '../components/appointments/NextAppointment';
import AppointmentsCalendar from '../components/appointments/AppointmentsCalendar';
import { mockAppointments } from '../data/mockData';

const AppointmentsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredAppointments = useMemo(() => {
    return mockAppointments.filter(appointment => {
      const matchesSearch = 
        appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === 'all' || appointment.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  const nextAppointment = useMemo(() => {
    return mockAppointments.find(apt => apt.status === 'confirmed');
  }, []);

  const handleNewAppointment = () => {
    navigate('/appointments/new');
  };

  const handleView = (id: number) => {
    navigate(`/appointments/${id}`);
  };

  const handleEdit = (id: number) => {
    navigate(`/appointments/${id}/edit`);
  };

  const handleDelete = (id: number) => {
    // Implement delete logic
    console.log('Delete appointment:', id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AppointmentsHeader
        onSearch={setSearchQuery}
        onNewAppointment={handleNewAppointment}
        onFilterChange={setFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {nextAppointment && <NextAppointment appointment={nextAppointment} />}
          <AppointmentsTable
            appointments={filteredAppointments}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
        
        <div className="lg:col-span-1">
          <AppointmentsCalendar />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;