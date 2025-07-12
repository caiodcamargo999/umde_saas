'use client';
import { Send } from 'lucide-react';
import { KeyboardEvent } from 'react';

interface MessageInputProps {
  onSendMessage: () => void;
  message: string;
  setMessage: (message: string) => void;
}

export const MessageInput = ({ onSendMessage, message, setMessage }: MessageInputProps) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-blue-500/20 flex items-center gap-2">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite uma mensagem..."
        className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        rows={1}
        style={{ maxHeight: '100px' }}
      />
      <button
        onClick={onSendMessage}
        className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};
