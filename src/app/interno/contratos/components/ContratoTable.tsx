'use client';
import { } from 'lucide-react';
import type { Contrato } from '../page';

interface ContratoTableProps {
  contratos: Contrato[];
  onContratoClick: (contrato: Contrato) => void;
}

export const ContratoTable = ({ contratos, onContratoClick }: ContratoTableProps) => {
  return (
    <>
      {/* Tabela tradicional para md+ */}
      <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#101C3A]/80">
            <tr className="text-white/80 font-bold">
              <th className="px-6 py-4">Número</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Região</th>
              <th className="px-6 py-4">Modelo</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map(contrato => (
              <tr key={contrato.id} className="border-t border-white/10 hover:bg-blue-500/5 transition-colors cursor-pointer" onClick={() => onContratoClick(contrato)}>
                <td className="px-6 py-4 font-semibold text-white">{contrato.numero}</td>
                <td className="px-6 py-4 text-white/70">{contrato.cliente}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${contrato.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : contrato.status === 'Finalizado' ? 'bg-blue-600/30 text-blue-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{contrato.status}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${contrato.tipo === 'Venda' ? 'bg-blue-600/30 text-blue-400' : contrato.tipo === 'Aluguel' ? 'bg-green-600/30 text-green-400' : 'bg-purple-600/30 text-purple-400'}`}>{contrato.tipo}</span>
                </td>
                <td className="px-6 py-4 text-white">{contrato.valor}</td>
                <td className="px-6 py-4 text-white/70">{contrato.regiao}</td>
                <td className="px-6 py-4 text-white/70 text-xs">{contrato.modeloUsado}</td>
                <td className="px-6 py-4 text-right">
                  <button 
                    className="px-3 py-1 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
                    onClick={e => {e.stopPropagation(); onContratoClick(contrato);}}
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
        {contratos.map((contrato) => (
          <div
            key={contrato.id}
            className="rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex flex-col gap-2 cursor-pointer"
            onClick={() => onContratoClick(contrato)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-base">{contrato.numero}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${contrato.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : contrato.status === 'Finalizado' ? 'bg-blue-600/30 text-blue-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{contrato.status}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <span><span className="font-semibold text-white/60">Cliente:</span> {contrato.cliente}</span>
              <span><span className="font-semibold text-white/60">Tipo:</span> {contrato.tipo}</span>
              <span><span className="font-semibold text-white/60">Valor:</span> {contrato.valor}</span>
              <span><span className="font-semibold text-white/60">Região:</span> {contrato.regiao}</span>
              <span><span className="font-semibold text-white/60">Modelo:</span> {contrato.modeloUsado}</span>
            </div>
            <button
              className="mt-3 px-3 py-2 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all self-end"
              onClick={e => { e.stopPropagation(); onContratoClick(contrato); }}
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
