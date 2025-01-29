import React from 'react';
import ChatListItem from './ChatListItem';
import { useChat } from '../../../hooks/useChat';
import { mockChats } from '../../../data/mockChats';

const ChatList: React.FC = () => {
  const { filter, searchQuery, selectedChat, setSelectedChat } = useChat();

  const filteredChats = mockChats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || chat.members?.some(m => m.role === filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredChats.map((chat) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          isSelected={selectedChat?.id === chat.id}
          onClick={() => setSelectedChat(chat)}
        />
      ))}
    </div>
  );
}