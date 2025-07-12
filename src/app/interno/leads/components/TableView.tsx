'use client';
import type { Lead } from '../page';

interface TableViewProps {
  leads: Lead[];
  onLeadClick: (lead: Lead) => void;
}

export const TableView = ({ leads, onLeadClick }: TableViewProps) => {
  return (
    <>
      {/* Tabela tradicional para md+ */}
      <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#101C3A]/80">
            <tr className="text-white/80 font-bold">
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Origem</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Etapa</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-white/10 hover:bg-blue-500/5 transition-colors">
                <td className="px-6 py-4 font-semibold text-white">{lead.nome}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${lead.status === 'Fechado' ? 'bg-green-600/30 text-green-400' : lead.status === 'Novo' ? 'bg-blue-600/30 text-blue-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{lead.status}</span>
                </td>
                <td className="px-6 py-4 text-white/70">{lead.origem}</td>
                <td className="px-6 py-4 text-white">{lead.valor}</td>
                <td className="px-6 py-4 text-white/70">{lead.etapa}</td>
                <td className="px-6 py-4 text-right">
                  <button 
                    className="px-3 py-1 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
                    onClick={() => onLeadClick(lead)}
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Cards verticais para mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex flex-col gap-2"
            onClick={() => onLeadClick(lead)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-base">{lead.nome}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${lead.status === 'Fechado' ? 'bg-green-600/30 text-green-400' : lead.status === 'Novo' ? 'bg-blue-600/30 text-blue-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{lead.status}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <span><span className="font-semibold text-white/60">Origem:</span> {lead.origem}</span>
              <span><span className="font-semibold text-white/60">Valor:</span> {lead.valor}</span>
              <span><span className="font-semibold text-white/60">Etapa:</span> {lead.etapa}</span>
            </div>
            <button
              className="mt-3 w-full px-3 py-2 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
              onClick={e => { e.stopPropagation(); onLeadClick(lead); }}
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
