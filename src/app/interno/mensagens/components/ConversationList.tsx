'use client';
import { Search, User } from 'lucide-react';
import Image from 'next/image';
import type { Conversation } from '../page';

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  onSelectConversation: (conversation: Conversation) => void;
  onSearch: (value: string) => void;
}

export const ConversationList = ({ conversations, selectedConversation, onSelectConversation, onSearch }: ConversationListProps) => {
  return (
    <>
      {/* Lista tradicional para md+ */}
      <div className="hidden md:flex w-80 min-w-[220px] h-full rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 flex-col">
        <div className="p-4 border-b border-blue-500/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Buscar conversa..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((c) => (
            <div
              key={c.id}
              className={`px-4 py-3 border-b border-white/5 hover:bg-blue-500/10 cursor-pointer transition flex items-center gap-3 ${selectedConversation?.id === c.id ? 'bg-blue-500/10' : ''}`}
              onClick={() => onSelectConversation(c)}
            >
              <div className="relative w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {c.avatar ? (
                  <Image src={c.avatar} alt={c.name} layout="fill" objectFit="cover" className="rounded-full" />
                ) : (
                  <User className="w-6 h-6" />
                )}
                {c.status === 'online' && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#101C3A]" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm truncate">{c.name}</span>
                  <span className="text-xs text-white/40 ml-2">{c.lastMessageTime}</span>
                </div>
                <p className="text-xs text-white/60 truncate">{c.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cards verticais para mobile */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="p-4 border-b border-blue-500/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Buscar conversa..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>
        {conversations.map((c) => (
          <div
            key={c.id}
            className={`rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex items-center gap-3 cursor-pointer ${selectedConversation?.id === c.id ? 'bg-blue-500/10' : ''}`}
            onClick={() => onSelectConversation(c)}
          >
            <div className="relative w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              {c.avatar ? (
                <Image src={c.avatar} alt={c.name} layout="fill" objectFit="cover" className="rounded-full" />
              ) : (
                <User className="w-6 h-6" />
              )}
              {c.status === 'online' && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#101C3A]" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-base truncate">{c.name}</span>
                <span className="text-xs text-white/40 ml-2">{c.lastMessageTime}</span>
              </div>
              <p className="text-xs text-white/60 truncate">{c.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
