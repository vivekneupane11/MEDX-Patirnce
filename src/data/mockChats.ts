import { Chat } from '../types';

export const mockChats: Chat[] = [
  {
    id: 1,
    name: "Équipe technique",
    type: "group",
    unreadCount: 3,
    lastMessage: {
      content: "Installation prévue pour demain à 14h",
      timestamp: "2024-03-15T10:30:00"
    },
    members: [
      { id: 1, name: "Jean Tech", status: "online", role: "technician" },
      { id: 2, name: "Marie Tech", status: "offline", role: "technician" }
    ]
  },
  {
    id: 2,
    name: "Pierre Martin",
    type: "individual",
    unreadCount: 1,
    lastMessage: {
      content: "Merci pour le suivi",
      timestamp: "2024-03-15T09:15:00"
    },
    members: [
      { id: 3, name: "Pierre Martin", status: "offline", role: "patient" }
    ]
  },
  {
    id: 3,
    name: "Coordinateurs",
    type: "group",
    unreadCount: 0,
    lastMessage: {
      content: "Planning de la semaine mis à jour",
      timestamp: "2024-03-14T16:45:00"
    },
    members: [
      { id: 4, name: "Sophie Coord", status: "online", role: "coordinator" },
      { id: 5, name: "Marc Coord", status: "online", role: "coordinator" }
    ]
  }
];