'use client';
import { Search } from 'lucide-react';

interface ContratoFiltersProps {
  filtroNumero: string;
  setFiltroNumero: (value: string) => void;
  filtroStatus: string[];
  setFiltroStatus: (value: string[]) => void;
  filtroTipo: string[];
  setFiltroTipo: (value: string[]) => void;
  filtroRegiao: string[];
  setFiltroRegiao: (value: string[]) => void;
  filtroValorMin: string;
  setFiltroValorMin: (value: string) => void;
  filtroValorMax: string;
  setFiltroValorMax: (value: string) => void;
  limparFiltros: () => void;
}

export const ContratoFilters = ({
  filtroNumero, setFiltroNumero,
  filtroStatus, setFiltroStatus,
  filtroTipo, setFiltroTipo,
  filtroRegiao, setFiltroRegiao,
  filtroValorMin, setFiltroValorMin,
  filtroValorMax, setFiltroValorMax,
  limparFiltros
}: ContratoFiltersProps) => {
  const regioesDisponiveis = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Florianópolis"];

  return (
    <div className="mb-6 p-4 rounded-2xl bg-[#101C3A]/50 border border-blue-500/20">
      <h2 className="text-lg font-bold text-white mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Buscar por número/cliente</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Digite para buscar..."
              value={filtroNumero}
              onChange={(e) => setFiltroNumero(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Status</label>
          <div className="flex gap-4">
            {["Ativo", "Pendente", "Finalizado"].map(status => (
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
            {["Venda", "Aluguel", "Parceria"].map(tipo => (
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
          <label className="block text-sm font-medium text-white/70 mb-2">Região</label>
          <div className="flex flex-wrap gap-4">
            {regioesDisponiveis.map(regiao => (
              <label key={regiao} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={filtroRegiao.includes(regiao)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFiltroRegiao([...filtroRegiao, regiao]);
                    } else {
                      setFiltroRegiao(filtroRegiao.filter(r => r !== regiao));
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-blue-600 bg-white/10 border-blue-500 rounded focus:ring-blue-500"
                />
                {regiao}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Valor (mín)</label>
          <input
            type="text"
            placeholder="R$ 0"
            value={filtroValorMin}
            onChange={(e) => setFiltroValorMin(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Valor (máx)</label>
          <input
            type="text"
            placeholder="R$ 10M"
            value={filtroValorMax}
            onChange={(e) => setFiltroValorMax(e.target.value)}
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
