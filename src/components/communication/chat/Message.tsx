import React from 'react';
import { Check, CheckCheck } from 'lucide-react';
import { Message as MessageType } from '../../../types';
import { formatTime } from '../../../utils/formatters';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isOutgoing = message.sender === 'current_user';

  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isOutgoing
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <div className="flex items-center justify-end space-x-1 mt-1">
          <span className="text-xs opacity-70">
            {formatTime(message.timestamp)}
          </span>
          {isOutgoing && (
            message.read ? 
              <CheckCheck className="w-4 h-4 text-blue-300" /> :
              <Check className="w-4 h-4 text-blue-300" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;