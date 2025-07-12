'use client';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  time: string;
}

interface MessageBubbleProps {
  message: Message;
  isOwnMessage: boolean;
}

export const MessageBubble = ({ message, isOwnMessage }: MessageBubbleProps) => {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${isOwnMessage ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>
        <p className="text-sm">{message.text}</p>
        <span className={`block text-xs mt-1 ${isOwnMessage ? 'text-blue-200' : 'text-gray-400'} text-right`}>{message.time}</span>
      </div>
    </div>
  );
};
