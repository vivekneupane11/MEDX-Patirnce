import React from 'react';
import { useChat } from '../../../hooks/useChat';

const ChatFilter: React.FC = () => {
  const { filter, setFilter } = useChat();

  return (
    <div className="px-4 py-2 border-b">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        <option value="all">Tous</option>
        <option value="technicians">Techniciens</option>
        <option value="coordinators">Coordinateurs</option>
        <option value="patients">Patients</option>
      </select>
    </div>
  );
}

export default ChatFilter;