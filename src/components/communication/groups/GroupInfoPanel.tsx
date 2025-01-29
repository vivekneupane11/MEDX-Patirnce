import React from 'react';
import { X, UserPlus, Settings, Trash2 } from 'lucide-react';
import { useChat } from '../../../hooks/useChat';
import MemberList from './MemberList';

interface GroupInfoPanelProps {
  onClose: () => void;
}

const GroupInfoPanel: React.FC<GroupInfoPanelProps> = ({ onClose }) => {
  const { selectedChat } = useChat();

  if (!selectedChat || selectedChat.type !== 'group') return null;

  return (
    <div className="w-80 border-l bg-white flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-medium">Informations du groupe</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Membres ({selectedChat.members?.length || 0})</h4>
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
              <UserPlus className="w-5 h-5" />
            </button>
          </div>
          <MemberList members={selectedChat.members || []} />
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Actions</h4>
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5 text-gray-500" />
              <span>Paramètres du groupe</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 text-left text-red-600 hover:bg-red-50 rounded-lg">
              <Trash2 className="w-5 h-5" />
              <span>Supprimer le groupe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}