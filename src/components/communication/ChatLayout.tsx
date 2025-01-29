import React from 'react';
import ChatSidebar from './sidebar/ChatSidebar';
import ChatPanel from './chat/ChatPanel';
import GroupInfoPanel from './groups/GroupInfoPanel';
import { useChat } from '../../hooks/useChat';

const ChatLayout: React.FC = () => {
  const { 
    selectedChat,
    showGroupInfo,
    toggleGroupInfo 
  } = useChat();

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50">
      <ChatSidebar />
      {selectedChat && <ChatPanel />}
      {showGroupInfo && <GroupInfoPanel onClose={toggleGroupInfo} />}
    </div>
  );
}

export default ChatLayout;