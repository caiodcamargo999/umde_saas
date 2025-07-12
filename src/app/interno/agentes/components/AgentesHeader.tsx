'use client';
import { Plus } from 'lucide-react';

interface AgentesHeaderProps {
  onAddAgente: () => void;
}

export const AgentesHeader = ({ onAddAgente }: AgentesHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white">Agentes SDR de AI</h1>
        <button 
          onClick={onAddAgente}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Criar Agente AI</span>
        </button>
      </div>
    </div>
  );
};
