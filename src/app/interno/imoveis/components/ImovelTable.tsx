'use client';
import { } from 'lucide-react';
import type { Imovel } from '../page';

interface ImovelTableProps {
  imoveis: Imovel[];
  onImovelClick: (imovel: Imovel) => void;
}

export const ImovelTable = ({ imoveis, onImovelClick }: ImovelTableProps) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20">
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
  );
};
