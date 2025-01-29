import React from 'react';
import { Search, Plus } from 'lucide-react';
import ChatList from './ChatList';
import ChatFilter from './ChatFilter';
import { useChat } from '../../../hooks/useChat';

const ChatSidebar: React.FC = () => {
  const { searchQuery, setSearchQuery, openNewGroupModal } = useChat();

  return (
    <div className="w-80 border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une conversation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
      </div>
      
      <ChatFilter />
      <ChatList />

      <button
        onClick={openNewGroupModal}
        className="absolute bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Nouveau groupe"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatSidebar;