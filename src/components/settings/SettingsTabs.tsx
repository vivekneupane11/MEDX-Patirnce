import React, { useState } from 'react';
import { User, Settings, Users, History, Lock } from 'lucide-react';
import AccountSettings from './tabs/AccountSettings';
import PreferencesSettings from './tabs/PreferencesSettings';
import UsersSettings from './tabs/UsersSettings';
import ActivitySettings from './tabs/ActivitySettings';
import SecuritySettings from './tabs/SecuritySettings';

const tabs = [
  { id: 'account', name: 'Compte personnel', icon: User, component: AccountSettings },
  { id: 'preferences', name: 'Préférences', icon: Settings, component: PreferencesSettings },
  { id: 'users', name: 'Utilisateurs et rôles', icon: Users, component: UsersSettings },
  { id: 'activity', name: 'Historique', icon: History, component: ActivitySettings },
  { id: 'security', name: 'Sécurité', icon: Lock, component: SecuritySettings },
];

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState('account');

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || AccountSettings;

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group inline-flex items-center px-4 py-4 border-b-2 font-medium text-sm
                  ${isActive
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon className={`
                  -ml-0.5 mr-2 h-5 w-5
                  ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
                `} />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="p-6">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default SettingsTabs;