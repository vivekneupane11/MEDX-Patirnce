import React from 'react';
import { MoreVertical } from 'lucide-react';
import { ChatMember } from '../../../types';

interface MemberListProps {
  members: ChatMember[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <div className="space-y-2">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium">{member.name[0]}</span>
              </div>
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                  member.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            </div>
            <div>
              <p className="font-medium text-sm">{member.name}</p>
              <p className="text-xs text-gray-500 capitalize">{member.role}</p>
            </div>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      ))}
    </div>
  );
}