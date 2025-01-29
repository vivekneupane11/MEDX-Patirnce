import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Bell, Calendar, Users, FileText, Settings, LogOut, MessageSquare, BarChart2 } from 'lucide-react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Tableau de bord', icon: Menu, path: '/' },
    { name: 'Patients', icon: Users, path: '/patients' },
    { name: 'Rendez-vous', icon: Calendar, path: '/appointments' },
    { name: 'Prescriptions', icon: FileText, path: '/prescriptions' },
    { name: 'Communication', icon: MessageSquare, path: '/communication' },
    { name: 'Analyses', icon: BarChart2, path: '/analytics' },
    { name: 'Paramètres', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-semibold text-blue-600">Oxynect</h1>
          </div>
          <nav className="flex-1 px-2 mt-5 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                } group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md`}
              >
                <item.icon
                  className={`${
                    location.pathname === item.path ? 'text-blue-600' : 'text-gray-400'
                  } mr-3 flex-shrink-0 h-6 w-6`}
                />
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex-shrink-0 p-4">
            <button className="flex items-center w-full text-sm text-gray-600 hover:text-gray-900">
              <LogOut className="w-5 h-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between px-4 py-4 bg-white border-b">
          <div className="flex items-center">
            <button className="text-gray-500 md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="ml-2 text-xl font-semibold text-gray-800">
              {navItems.find(item => item.path === location.pathname)?.name || 'Tableau de bord'}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-1 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Profile"
              />
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;