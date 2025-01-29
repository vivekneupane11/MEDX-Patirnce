import React from 'react';
import { MoreVertical, Users } from 'lucide-react';
import { Chat } from '../../../types';
import { useChat } from '../../../hooks/useChat';

interface ChatHeaderProps {
  chat: Chat;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ chat }) => {
  const { toggleGroupInfo } = useChat();

  return (
    <div className="px-4 py-3 border-b flex items-center justify-between bg-white">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          {chat.type === 'group' ? (
            <Users className="w-6 h-6 text-blue-600" />
          ) : (
            <span className="text-blue-600 font-medium">{chat.name[0]}</span>
          )}
        </div>
        <div>
          <h2 className="font-medium">{chat.name}</h2>
          {chat.type === 'group' && chat.members && (
            <p className="text-sm text-gray-500">{chat.members.length} membres</p>
          )}
        </div>
      </div>
      <button 
        onClick={toggleGroupInfo}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <MoreVertical className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
}