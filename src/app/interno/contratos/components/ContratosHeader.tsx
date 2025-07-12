'use client';
import { Search, Plus, FileText } from 'lucide-react';

interface ContratosHeaderProps {
  onSearch: (value: string) => void;
  onCreateContrato: () => void;
  onShowModelos: () => void;
}

export const ContratosHeader = ({ onSearch, onCreateContrato, onShowModelos }: ContratosHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Contratos</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Buscar contrato..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button 
            onClick={onCreateContrato}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all w-full"
          >
            <Plus className="w-5 h-5" />
            <span>Criar Contrato com AI</span>
          </button>
          <button 
            onClick={onShowModelos}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-blue-500/40 hover:bg-blue-500/20 transition-all w-full"
          >
            <FileText className="w-5 h-5" />
            <span>Modelos</span>
          </button>
        </div>
      </div>
    </div>
  );
};
