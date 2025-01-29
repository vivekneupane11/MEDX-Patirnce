export interface Chat {
  id: number;
  name: string;
  type: 'individual' | 'group';
  lastMessage?: {
    content: string;
    timestamp: string;
  };
  members?: ChatMember[];
}

export interface ChatMember {
  id: number;
  name: string;
  role: string;
  status: 'online' | 'offline';
}

export interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
  read: boolean;
}