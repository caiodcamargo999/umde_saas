'use client';
import { Search, Plus } from 'lucide-react';

interface ImoveisHeaderProps {
  onSearch: (value: string) => void;
  onAddImovel: () => void;
}

export const ImoveisHeader = ({ onSearch, onAddImovel }: ImoveisHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white">Imóveis</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Buscar imóvel..."
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button 
            onClick={onAddImovel}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>Adicionar Imóvel</span>
          </button>
        </div>
      </div>
    </div>
  );
};
