import React, { useState } from 'react';
import { Shield, Key, Lock } from 'lucide-react';

const SecuritySettings = () => {
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    passwordExpiration: '90',
    autoLogout: '30',
    strongPassword: true,
  });

  return (
    <div className="max-w-2xl">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Paramètres de sécurité</h2>

      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Authentification à deux facteurs</h3>
                <p className="text-sm text-gray-500">Ajoutez une couche de sécurité supplémentaire à votre compte</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={securitySettings.twoFactor}
                onChange={(e) => setSecuritySettings({ ...securitySettings, twoFactor: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Key className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Politique de mot de passe</h3>
              <p className="text-sm text-gray-500">Configurez les exigences de mot de passe</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expiration du mot de passe (jours)
              </label>
              <select
                value={securitySettings.passwordExpiration}
                onChange={(e) => setSecuritySettings({ ...securitySettings, passwordExpiration: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="30">30 jours</option>
                <option value="60">60 jours</option>
                <option value="90">90 jours</option>
                <option value="never">Jamais</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700">Exiger un mot de passe fort</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={securitySettings.strongPassword}
                  onChange={(e) => setSecuritySettings({ ...securitySettings, strongPassword: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Lock className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Session</h3>
              <p className="text-sm text-gray-500">Gérez les paramètres de session</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Déconnexion automatique après inactivité (minutes)
            </label>
            <select
              value={securitySettings.autoLogout}
              onChange={(e) => setSecuritySettings({ ...securitySettings, autoLogout: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 heure</option>
              <option value="never">Jamais</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;