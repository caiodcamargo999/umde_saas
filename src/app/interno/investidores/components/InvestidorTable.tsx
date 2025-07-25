'use client';
import { } from 'lucide-react';
import type { Investidor } from '../page';

interface InvestidorTableProps {
  investidores: Investidor[];
  onInvestidorClick: (investidor: Investidor) => void;
}

export const InvestidorTable = ({ investidores, onInvestidorClick }: InvestidorTableProps) => {
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
              <th className="px-6 py-4">Objetivos</th>
              <th className="px-6 py-4">Investimentos</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {investidores.map(investidor => (
              <tr key={investidor.id} className="border-t border-white/10 hover:bg-blue-500/5 transition-colors cursor-pointer" onClick={() => onInvestidorClick(investidor)}>
                <td className="px-6 py-4 font-semibold text-white">{investidor.nome}</td>
                <td className="px-6 py-4 text-white/70">{investidor.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${investidor.tipo === 'Real Estate' ? 'bg-blue-600/30 text-blue-400' : 'bg-green-600/30 text-green-400'}`}>{investidor.tipo}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${investidor.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'}`}>{investidor.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {investidor.objetivos.map(objetivo => (
                      <span key={objetivo} className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-white">{objetivo}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-white">{investidor.investimentos}</td>
                <td className="px-6 py-4 text-white/70">{investidor.total}</td>
                <td className="px-6 py-4 text-right">
                  <button 
                    className="px-3 py-1 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
                    onClick={e => {e.stopPropagation(); onInvestidorClick(investidor);}}
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
        {investidores.map((investidor) => (
          <div
            key={investidor.id}
            className="rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex flex-col gap-2 cursor-pointer"
            onClick={() => onInvestidorClick(investidor)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-base">{investidor.nome}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${investidor.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'}`}>{investidor.status}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <span><span className="font-semibold text-white/60">Email:</span> {investidor.email}</span>
              <span><span className="font-semibold text-white/60">Tipo:</span> {investidor.tipo}</span>
              <span><span className="font-semibold text-white/60">Investimentos:</span> {investidor.investimentos}</span>
              <span><span className="font-semibold text-white/60">Total:</span> {investidor.total}</span>
              <span><span className="font-semibold text-white/60">Objetivos:</span> {investidor.objetivos.join(', ')}</span>
            </div>
            <button
              className="mt-3 w-full px-3 py-2 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
              onClick={e => { e.stopPropagation(); onInvestidorClick(investidor); }}
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
