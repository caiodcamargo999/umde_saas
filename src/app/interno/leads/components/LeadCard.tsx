'use client';
import Image from 'next/image';
import type { Lead } from '../page';

interface LeadCardProps {
  lead: Lead;
  isDragging: boolean;
}

export const LeadCard = ({ lead, isDragging }: LeadCardProps) => {
  return (
    <div className={`p-4 rounded-xl bg-[#0D1A3A] border border-blue-500/30 shadow-lg cursor-pointer transition-all ${isDragging ? 'ring-2 ring-blue-500' : 'hover:bg-[#13235a]'}`}>
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-white text-base mb-2">{lead.nome}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${lead.status === 'Fechado' ? 'bg-green-600/30 text-green-400' : lead.status === 'Novo' ? 'bg-blue-600/30 text-blue-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{lead.status}</span>
      </div>
      <p className="text-sm text-white/70 mb-1">{lead.valor}</p>
      <p className="text-xs text-white/50 mb-4">Origem: {lead.origem}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="https://placehold.co/32x32/13235a/FFFFFF?text=U" alt="User" width={32} height={32} className="rounded-full" />
          <span className="text-sm text-white/80">Responsável</span>
        </div>
        <span className="text-xs text-white/50">há 2 dias</span>
      </div>
    </div>
  );
};
