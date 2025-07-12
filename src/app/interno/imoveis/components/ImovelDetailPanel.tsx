'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, DollarSign, Tag, CheckCircle, XCircle, MessageSquare, Calendar, StickyNote } from 'lucide-react';
import type { Imovel } from '../page';

interface ImovelDetailPanelProps {
  imovel: Imovel | null;
  onClose: () => void;
  onUpdateImovel: (imovel: Imovel) => void;
}

export const ImovelDetailPanel = ({ imovel, onClose, onUpdateImovel }: ImovelDetailPanelProps) => {
  if (!imovel) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0D1A3A] border-l border-blue-500/30 shadow-2xl z-50 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 border-b border-blue-500/20 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Detalhes do Imóvel</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>
        
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div>
            <label className="text-sm text-white/50">Nome</label>
            <input
              type="text"
              value={imovel.nome}
              onChange={(e) => onUpdateImovel({ ...imovel, nome: e.target.value })}
              className="w-full bg-transparent text-lg text-white font-semibold border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-white/50">Tipo</label>
            <div className="flex items-center gap-2 text-white/80">
              <Tag className="w-5 h-5" />
              <span>{imovel.tipo}</span>
            </div>
          </div>
          <div>
            <label className="text-sm text-white/50">Status</label>
            <div className="flex items-center gap-2">
              {imovel.status === 'Disponível' && <CheckCircle className="w-5 h-5 text-green-400" />}
              {imovel.status === 'Alugado' && <XCircle className="w-5 h-5 text-red-400" />}
              {imovel.status === 'Em negociação' && <Tag className="w-5 h-5 text-yellow-400" />}
              <span className={`font-semibold ${imovel.status === 'Disponível' ? 'text-green-400' : imovel.status === 'Alugado' ? 'text-red-400' : 'text-yellow-400'}`}>{imovel.status}</span>
            </div>
          </div>
          <div>
            <label className="text-sm text-white/50">Valor</label>
            <div className="flex items-center gap-2 text-white/80">
              <DollarSign className="w-5 h-5" />
              <span>{imovel.valor}</span>
            </div>
          </div>
          <div>
            <label className="text-sm text-white/50">Cidade</label>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>{imovel.cidade}</span>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-blue-500/20 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Contato</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Agendar Visita</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <StickyNote className="w-5 h-5" />
            <span className="text-xs">Nota</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
