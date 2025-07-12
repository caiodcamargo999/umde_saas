'use client';
import { X, User } from 'lucide-react';
import Image from 'next/image';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  time: string;
}

interface Conversation {
  id: string;
  name: string;
  channel: string;
  status: string;
  avatar?: string;
  messages: Message[];
}

interface ChatPanelProps {
  conversation: Conversation;
  onClose: () => void;
  onSendMessage: (conversationId: string, message: string) => void;
}

export const ChatPanel = ({ conversation, onClose, onSendMessage }: ChatPanelProps) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation.messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(conversation.id, message);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20">
      <div className="p-4 border-b border-blue-500/20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            {conversation.avatar ? (
              <Image src={conversation.avatar} alt={conversation.name} layout="fill" objectFit="cover" className="rounded-full" />
            ) : (
              <User className="w-6 h-6" />
            )}
            {conversation.status === 'online' && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#101C3A]" />
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{conversation.name}</h2>
            <p className="text-sm text-white/70">{conversation.channel}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
          <X className="w-6 h-6 text-white/70" />
        </button>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
        {conversation.messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} isOwnMessage={msg.sender === 'Me'} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSendMessage={handleSendMessage} message={message} setMessage={setMessage} />
    </div>
  );
};
