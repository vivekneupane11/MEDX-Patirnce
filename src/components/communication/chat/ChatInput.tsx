import React, { useState, useRef } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import EmojiPicker from './EmojiPicker';

interface ChatInputProps {
  onSend: (content: string) => void;
  onAttachment?: (file: File) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, onAttachment }) => {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAttachment) {
      onAttachment(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={handleFileSelect}
          className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full"
        >
          <Paperclip className="w-5 h-5" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez votre message..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
        />

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowEmoji(!showEmoji)}
            className="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <Smile className="w-5 h-5" />
          </button>
          {showEmoji && <EmojiPicker onSelect={(emoji) => setMessage(prev => prev + emoji)} />}
        </div>

        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*,application/pdf"
      />
    </form>
  );
};

export default ChatInput;