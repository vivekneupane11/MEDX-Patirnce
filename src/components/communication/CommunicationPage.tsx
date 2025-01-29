import React from 'react';
import ChatLayout from './ChatLayout';
import NewGroupModal from './groups/NewGroupModal';
import { useChat } from '../../hooks/useChat';

const CommunicationPage: React.FC = () => {
  const { 
    showNewGroupModal, 
    closeNewGroupModal, 
    createGroup,
    chats 
  } = useChat();

  const availableMembers = chats.flatMap(chat => chat.members || [])
    .filter((member, index, self) => 
      index === self.findIndex(m => m.id === member.id)
    );

  return (
    <div className="h-full">
      <ChatLayout />
      <NewGroupModal
        isOpen={showNewGroupModal}
        onClose={closeNewGroupModal}
        onSubmit={createGroup}
        availableMembers={availableMembers}
      />
    </div>
  );
};

export default CommunicationPage;