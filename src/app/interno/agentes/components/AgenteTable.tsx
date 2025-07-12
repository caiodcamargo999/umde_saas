'use client';
import { } from 'lucide-react';
import type { Agente } from '../page';

interface AgenteTableProps {
  agentes: Agente[];
  onAgenteClick: (agente: Agente) => void;
}

export const AgenteTable = ({ agentes, onAgenteClick }: AgenteTableProps) => {
  return (
    <>
      {/* Tabela tradicional para md+ */}
      <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#101C3A]/80">
            <tr className="text-white/80 font-bold">
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Leads</th>
              <th className="px-6 py-4">Meta</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {agentes.map(agente => (
              <tr key={agente.id} className="border-t border-white/10 hover:bg-blue-500/5 transition-colors cursor-pointer" onClick={() => onAgenteClick(agente)}>
                <td className="px-6 py-4 font-semibold text-white">{agente.nome}</td>
                <td className="px-6 py-4 text-white/70">{agente.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${agente.tipo === 'AI' ? 'bg-blue-600/30 text-blue-400' : 'bg-green-600/30 text-green-400'}`}>{agente.tipo}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${agente.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'}`}>{agente.status}</span>
                </td>
                <td className="px-6 py-4 text-white">{agente.leads}</td>
                <td className="px-6 py-4 text-white/70">{agente.meta}</td>
                <td className="px-6 py-4 text-right">
                  <button 
                    className="px-3 py-1 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
                    onClick={e => {e.stopPropagation(); onAgenteClick(agente);}}
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
        {agentes.map((agente) => (
          <div
            key={agente.id}
            className="rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex flex-col gap-2 cursor-pointer"
            onClick={() => onAgenteClick(agente)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-base">{agente.nome}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${agente.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'}`}>{agente.status}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <span><span className="font-semibold text-white/60">Email:</span> {agente.email}</span>
              <span><span className="font-semibold text-white/60">Tipo:</span> {agente.tipo}</span>
              <span><span className="font-semibold text-white/60">Leads:</span> {agente.leads}</span>
              <span><span className="font-semibold text-white/60">Meta:</span> {agente.meta}</span>
            </div>
            <button
              className="mt-3 w-full px-3 py-2 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
              onClick={e => { e.stopPropagation(); onAgenteClick(agente); }}
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
