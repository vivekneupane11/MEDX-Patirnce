import React, { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import NewAppointmentModal from './modals/NewAppointmentModal';
import { mockAppointments } from '../../data/mockData';
import { getDaysInMonth } from '../../utils/calendar';
import { AppointmentFormData } from '../../types';

const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const AppointmentsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);

  const days = useMemo(() => getDaysInMonth(currentDate, mockAppointments), [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleNewAppointment = () => {
    setSelectedDate(new Date());
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  const handleAppointmentSubmit = (data: AppointmentFormData) => {
    console.log('New appointment:', data);
    setShowModal(false);
    setSelectedDate(null);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      {/* Calendar Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map(day => (
            <div key={day} className="text-xs font-medium text-gray-500 text-center py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const isToday = day.date.toDateString() === new Date().toDateString();
            const isSelected = selectedDate?.toDateString() === day.date.toDateString();

            return (
              <button
                key={index}
                onClick={() => handleDayClick(day.date)}
                className={`
                  min-h-[80px] p-2 text-left rounded-lg transition-colors
                  ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'}
                  ${isSelected ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
                  ${isToday ? 'border-2 border-blue-500' : 'border border-gray-200'}
                `}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-medium ${
                    day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {day.date.getDate()}
                  </span>
                  {day.appointments.length > 0 && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                  )}
                </div>
                {day.appointments.map(appointment => (
                  <div
                    key={appointment.id}
                    className={`
                      text-xs p-1 mb-1 rounded truncate
                      ${appointment.status === 'confirmed' ? 'bg-green-50 text-green-700' :
                        appointment.status === 'pending' ? 'bg-yellow-50 text-yellow-700' :
                        'bg-blue-50 text-blue-700'}
                    `}
                    title={`${appointment.time} - ${appointment.patientName}`}
                  >
                    {appointment.time} - {appointment.patientName}
                  </div>
                ))}
              </button>
            );
          })}
        </div>
      </div>

      {/* Add Appointment Button */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleNewAppointment}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Calendar className="w-6 h-6" />
        </button>
      </div>

      {/* New Appointment Modal */}
      <NewAppointmentModal
        isOpen={showModal}
        onClose={handleModalClose}
        onSubmit={handleAppointmentSubmit}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default AppointmentsCalendar;