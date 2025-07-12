'use client';
import { Search, Plus, LayoutGrid, List } from 'lucide-react';

interface LeadsHeaderProps {
  view: 'kanban' | 'tabela';
  setView: (view: 'kanban' | 'tabela') => void;
  onSearch: (value: string) => void;
  onAddLead: () => void;
}

export const LeadsHeader = ({ view, setView, onSearch, onAddLead }: LeadsHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Leads</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Buscar lead..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <button 
            onClick={onAddLead}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all w-full"
          >
            <Plus className="w-5 h-5" />
            <span>Adicionar Lead</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setView('kanban')}
          className={`p-2 rounded-lg ${view === 'kanban' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60'} transition-colors`}
        >
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setView('tabela')}
          className={`p-2 rounded-lg ${view === 'tabela' ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60'} transition-colors`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
