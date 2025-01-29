import React from 'react';
import { Users } from 'lucide-react';
import { Chat } from '../../../types';
import { formatTimeAgo } from '../../../utils/formatters';

interface ChatListItemProps {
  chat: Chat;
  isSelected: boolean;
  onClick: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 ${
        isSelected ? 'bg-blue-50' : ''
      }`}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        {chat.type === 'group' ? (
          <Users className="w-6 h-6 text-blue-600" />
        ) : (
          <span className="text-blue-600 font-medium text-lg">{chat.name[0]}</span>
        )}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex justify-between items-baseline">
          <h3 className="font-medium truncate">{chat.name}</h3>
          {chat.lastMessage && (
            <span className="text-xs text-gray-500">
              {formatTimeAgo(chat.lastMessage.timestamp)}
            </span>
          )}
        </div>
        {chat.lastMessage && (
          <p className="text-sm text-gray-500 truncate">{chat.lastMessage.content}</p>
        )}
      </div>
      {chat.unreadCount > 0 && (
        <span className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
          {chat.unreadCount}
        </span>
      )}
    </button>
  );
}