import React, { useState } from 'react';
import { Sun, Moon, Bell } from 'lucide-react';

const PreferencesSettings = () => {
  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'fr',
    notifications: {
      email: true,
      sms: false,
      app: true,
    },
    display: {
      rowsPerPage: '10',
      defaultSort: 'date',
    },
  });

  return (
    <div className="max-w-2xl">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Préférences de l'application</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Apparence</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => setPreferences({ ...preferences, theme: 'light' })}
              className={`
                flex items-center px-4 py-2 rounded-md
                ${preferences.theme === 'light'
                  ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-600'
                  : 'bg-white text-gray-700 border border-gray-300'
                }
              `}
            >
              <Sun className="w-4 h-4 mr-2" />
              Clair
            </button>
            <button
              onClick={() => setPreferences({ ...preferences, theme: 'dark' })}
              className={`
                flex items-center px-4 py-2 rounded-md
                ${preferences.theme === 'dark'
                  ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-600'
                  : 'bg-white text-gray-700 border border-gray-300'
                }
              `}
            >
              <Moon className="w-4 h-4 mr-2" />
              Sombre
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Langue</h3>
          <select
            value={preferences.language}
            onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-sm text-gray-700">Notifications par email</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.notifications.email}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    notifications: {
                      ...preferences.notifications,
                      email: e.target.checked,
                    },
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-sm text-gray-700">Notifications SMS</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.notifications.sms}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    notifications: {
                      ...preferences.notifications,
                      sms: e.target.checked,
                    },
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Affichage des données</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-700">Lignes par page</label>
              <select
                value={preferences.display.rowsPerPage}
                onChange={(e) => setPreferences({
                  ...preferences,
                  display: {
                    ...preferences.display,
                    rowsPerPage: e.target.value,
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">Tri par défaut</label>
              <select
                value={preferences.display.defaultSort}
                onChange={(e) => setPreferences({
                  ...preferences,
                  display: {
                    ...preferences.display,
                    defaultSort: e.target.value,
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="date">Date</option>
                <option value="name">Nom</option>
                <option value="status">Statut</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSettings;