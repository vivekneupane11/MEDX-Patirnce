import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message } from '../types';

export const useSocket = (onMessage: (message: Message) => void) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // In a real app, this would be an environment variable
    const socket = io('wss://your-socket-server.com');
    socketRef.current = socket;

    socket.on('message', onMessage);
    socket.on('connect', () => console.log('Connected to chat server'));
    socket.on('disconnect', () => console.log('Disconnected from chat server'));

    return () => {
      socket.disconnect();
    };
  }, [onMessage]);

  const sendMessage = (message: Message) => {
    if (socketRef.current) {
      socketRef.current.emit('message', message);
    }
  };

  return { sendMessage };
};