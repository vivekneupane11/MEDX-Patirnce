import { Chat, Message, ChatMember } from '../types';

export const filterChats = (
  chats: Chat[],
  searchQuery: string,
  filter: string
): Chat[] => {
  return chats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || chat.members?.some(m => m.role === filter);
    return matchesSearch && matchesFilter;
  });
};

export const formatMessageStatus = (message: Message): string => {
  if (message.read) return 'Lu';
  return 'Envoyé';
};

export const sortChatsByLatestMessage = (chats: Chat[]): Chat[] => {
  return [...chats].sort((a, b) => {
    const timeA = a.lastMessage?.timestamp || '';
    const timeB = b.lastMessage?.timestamp || '';
    return timeB.localeCompare(timeA);
  });
};

export const getOnlineMembers = (members: ChatMember[]): ChatMember[] => {
  return members.filter(member => member.status === 'online');
};