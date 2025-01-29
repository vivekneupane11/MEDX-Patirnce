import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { useChat } from '../../../hooks/useChat';

const ChatPanel: React.FC = () => {
  const { selectedChat, messages, sendMessage } = useChat();

  if (!selectedChat) return null;

  return (
    <div className="flex-1 flex flex-col bg-white">
      <ChatHeader chat={selectedChat} />
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatPanel;