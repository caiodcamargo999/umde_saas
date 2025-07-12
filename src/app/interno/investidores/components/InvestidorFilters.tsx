'use client';
import { Search } from 'lucide-react';

interface InvestidorFiltersProps {
  filtroNome: string;
  setFiltroNome: (value: string) => void;
  filtroStatus: string[];
  setFiltroStatus: (value: string[]) => void;
  filtroTipo: string[];
  setFiltroTipo: (value: string[]) => void;
  filtroObjetivos: string[];
  setFiltroObjetivos: (value: string[]) => void;
  filtroInvestimentosMin: string;
  setFiltroInvestimentosMin: (value: string) => void;
  filtroInvestimentosMax: string;
  setFiltroInvestimentosMax: (value: string) => void;
  limparFiltros: () => void;
  objetivosDisponiveis: string[];
}

export const InvestidorFilters = ({
  filtroNome, setFiltroNome,
  filtroStatus, setFiltroStatus,
  filtroTipo, setFiltroTipo,
  filtroObjetivos, setFiltroObjetivos,
  filtroInvestimentosMin, setFiltroInvestimentosMin,
  filtroInvestimentosMax, setFiltroInvestimentosMax,
  limparFiltros,
  objetivosDisponiveis
}: InvestidorFiltersProps) => {
  return (
    <div className="mb-6 p-4 rounded-2xl bg-[#101C3A]/50 border border-blue-500/20">
      <h2 className="text-lg font-bold text-white mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Buscar por nome/email</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Digite para buscar..."
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Status</label>
          <div className="flex gap-4">
            {["Ativo", "Inativo"].map(status => (
              <label key={status} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filtroStatus.includes(status)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFiltroStatus([...filtroStatus, status]);
                    } else {
                      setFiltroStatus(filtroStatus.filter(s => s !== status));
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600 bg-white/10 border-blue-500 rounded focus:ring-blue-500"
                />
                {status}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Tipo</label>
          <div className="flex gap-4">
            {["Real Estate", "Business"].map(tipo => (
              <label key={tipo} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filtroTipo.includes(tipo)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFiltroTipo([...filtroTipo, tipo]);
                    } else {
                      setFiltroTipo(filtroTipo.filter(t => t !== tipo));
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600 bg-white/10 border-blue-500 rounded focus:ring-blue-500"
                />
                {tipo}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Objetivos</label>
          <div className="flex flex-wrap gap-4">
            {objetivosDisponiveis.map(objetivo => (
              <label key={objetivo} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filtroObjetivos.includes(objetivo)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFiltroObjetivos([...filtroObjetivos, objetivo]);
                    } else {
                      setFiltroObjetivos(filtroObjetivos.filter(o => o !== objetivo));
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600 bg-white/10 border-blue-500 rounded focus:ring-blue-500"
                />
                {objetivo}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Investimentos (mín)</label>
          <input
            type="number"
            placeholder="0"
            value={filtroInvestimentosMin}
            onChange={(e) => setFiltroInvestimentosMin(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Investimentos (máx)</label>
          <input
            type="number"
            placeholder="10"
            value={filtroInvestimentosMax}
            onChange={(e) => setFiltroInvestimentosMax(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={limparFiltros}
            className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-blue-500/40 hover:bg-blue-500/20 transition-all"
          >
            Limpar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};
