import { useState, useCallback } from 'react';
import { Message } from '../types';

export const useMessageStore = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((message: Message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const markAsRead = useCallback((messageIds: number[]) => {
    setMessages(prev => 
      prev.map(msg => 
        messageIds.includes(msg.id) ? { ...msg, read: true } : msg
      )
    );
  }, []);

  return {
    messages,
    addMessage,
    markAsRead
  };
};