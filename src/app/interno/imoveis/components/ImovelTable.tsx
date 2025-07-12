'use client';
import { } from 'lucide-react';
import type { Imovel } from '../page';

interface ImovelTableProps {
  imoveis: Imovel[];
  onImovelClick: (imovel: Imovel) => void;
}

export const ImovelTable = ({ imoveis, onImovelClick }: ImovelTableProps) => {
  return (
    <>
      {/* Tabela tradicional para md+ */}
      <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#101C3A]/80">
            <tr className="text-white/80 font-bold">
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Cidade</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {imoveis.map(item => (
              <tr key={item.nome} className="border-t border-white/10 hover:bg-blue-500/5 transition-colors cursor-pointer" onClick={() => onImovelClick(item)}>
                <td className="px-6 py-4 font-semibold text-white">{item.nome}</td>
                <td className="px-6 py-4 text-white/70">{item.tipo}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Disponível' ? 'bg-blue-600/30 text-blue-400' : item.status === 'Alugado' ? 'bg-green-600/30 text-green-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{item.status}</span>
                </td>
                <td className="px-6 py-4 text-white">{item.valor}</td>
                <td className="px-6 py-4 text-white/70">{item.cidade}</td>
                <td className="px-6 py-4 text-right">
                  <button 
                    className="px-3 py-1 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all"
                    onClick={e => {e.stopPropagation(); onImovelClick(item);}}
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
        {imoveis.map((item) => (
          <div
            key={item.nome}
            className="rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex flex-col gap-2 cursor-pointer"
            onClick={() => onImovelClick(item)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-base">{item.nome}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === 'Disponível' ? 'bg-blue-600/30 text-blue-400' : item.status === 'Alugado' ? 'bg-green-600/30 text-green-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{item.status}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <span><span className="font-semibold text-white/60">Tipo:</span> {item.tipo}</span>
              <span><span className="font-semibold text-white/60">Valor:</span> {item.valor}</span>
              <span><span className="font-semibold text-white/60">Cidade:</span> {item.cidade}</span>
            </div>
            <button
              className="mt-3 px-3 py-2 rounded-lg bg-blue-500/80 text-white text-xs font-bold shadow hover:bg-blue-500 transition-all self-end"
              onClick={e => { e.stopPropagation(); onImovelClick(item); }}
            >
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
