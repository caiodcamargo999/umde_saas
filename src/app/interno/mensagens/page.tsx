'use client';
import { useState } from "react";
import { ConversationList } from "./components/ConversationList";
import { ChatPanel } from "./components/ChatPanel";

export type Message = {
  text: string;
  sender: string;
  time: string;
};

export type Conversation = {
  id: string;
  name: string;
  channel: string;
  lastMessage: string;
  lastMessageTime: string;
  status: "online" | "offline" | "away";
  avatar?: string;
  messages: Message[];
};

const initialConversations: Conversation[] = [
  {
    id: "1",
    name: "João Silva",
    channel: "WhatsApp",
    lastMessage: "Olá, tudo bem?",
    lastMessageTime: "09:12",
    status: "online",
    messages: [
      { text: "Olá, tudo bem?", sender: "João Silva", time: "09:10" },
      { text: "Tudo ótimo! Como posso ajudar?", sender: "Me", time: "09:12" },
    ],
  },
  {
    id: "2",
    name: "Maria Souza",
    channel: "Email",
    lastMessage: "Enviei os documentos.",
    lastMessageTime: "Ontem",
    status: "offline",
    messages: [
      { text: "Prezada Maria, segue em anexo os documentos solicitados.", sender: "Me", time: "Ontem 14:30" },
      { text: "Recebido! Muito obrigada.", sender: "Maria Souza", time: "Ontem 15:00" },
    ],
  },
  {
    id: "3",
    name: "Carlos Lima",
    channel: "Canal Pro",
    lastMessage: "Proposta recebida.",
    lastMessageTime: "08:45",
    status: "online",
    messages: [
      { text: "Recebemos sua proposta. Em breve entraremos em contato.", sender: "Carlos Lima", time: "08:40" },
      { text: "Ok, aguardo!", sender: "Me", time: "08:45" },
    ],
  },
  {
    id: "4",
    name: "Ana Paula",
    channel: "WhatsApp",
    lastMessage: "Aguardo retorno.",
    lastMessageTime: "07:30",
    status: "away",
    messages: [
      { text: "Olá Ana, estamos analisando sua solicitação. Em breve teremos novidades.", sender: "Me", time: "07:25" },
      { text: "Certo, aguardo retorno.", sender: "Ana Paula", time: "07:30" },
    ],
  },
];

export default function MensagensPage() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(initialConversations[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter(conv => 
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (conversationId: string, text: string) => {
    const now = new Date();
    const time = now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
    const newMessage: Message = { text, sender: "Me", time };

    setConversations(prevConversations => 
      prevConversations.map(conv => 
        conv.id === conversationId 
          ? { 
              ...conv, 
              messages: [...conv.messages, newMessage], 
              lastMessage: text, 
              lastMessageTime: time 
            }
          : conv
      )
    );

    if (selectedConversation?.id === conversationId) {
      setSelectedConversation(prevSelected => 
        prevSelected ? { ...prevSelected, messages: [...prevSelected.messages, newMessage], lastMessage: text, lastMessageTime: time } : null
      );
    }
  };

  return (
    <div className="w-full max-w-full px-4 md:px-8 xl:px-16 flex flex-col md:flex-row h-auto md:h-[calc(100vh-120px)] gap-4 overflow-x-hidden">
      <ConversationList 
        conversations={filteredConversations} 
        selectedConversation={selectedConversation} 
        onSelectConversation={setSelectedConversation}
        onSearch={setSearchTerm}
      />
      {selectedConversation && (
        <ChatPanel 
          conversation={selectedConversation} 
          onClose={() => setSelectedConversation(null)} 
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
}