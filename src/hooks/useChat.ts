import { useState, useCallback } from 'react';
import { Chat, Message } from '../types';

export const useChat = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [showNewGroupModal, setShowNewGroupModal] = useState(false);

  const sendMessage = useCallback((content: string) => {
    if (!selectedChat) return;

    const newMessage: Message = {
      id: Date.now(),
      content,
      sender: 'current_user',
      timestamp: new Date().toISOString(),
      read: false
    };

    setMessages(prev => [...prev, newMessage]);
  }, [selectedChat]);

  const openNewGroupModal = useCallback(() => {
    setShowNewGroupModal(true);
  }, []);

  const closeNewGroupModal = useCallback(() => {
    setShowNewGroupModal(false);
  }, []);

  return {
    selectedChat,
    setSelectedChat,
    messages,
    searchQuery,
    setSearchQuery,
    showGroupInfo,
    setShowGroupInfo,
    showNewGroupModal,
    openNewGroupModal,
    closeNewGroupModal,
    sendMessage
  };
};