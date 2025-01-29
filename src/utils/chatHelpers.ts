import { Chat, ChatMember } from '../types';

export const getMemberStatus = (members: ChatMember[] = []): string => {
  const onlineCount = members.filter(m => m.status === 'online').length;
  if (onlineCount === 0) return 'Aucun membre en ligne';
  return `${onlineCount} membre${onlineCount > 1 ? 's' : ''} en ligne`;
};

export const getLastActive = (chat: Chat): string => {
  if (!chat.lastMessage?.timestamp) return '';
  const date = new Date(chat.lastMessage.timestamp);
  return date.toLocaleString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit'
  });
};

export const sortMembersByStatus = (members: ChatMember[]): ChatMember[] => {
  return [...members].sort((a, b) => {
    if (a.status === b.status) return a.name.localeCompare(b.name);
    return a.status === 'online' ? -1 : 1;
  });
};