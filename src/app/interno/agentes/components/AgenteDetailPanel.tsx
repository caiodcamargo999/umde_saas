'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, MessageSquare } from 'lucide-react';
import type { Agente } from '../page';

interface AgenteDetailPanelProps {
  agente: Agente | null;
  onClose: () => void;
  onUpdateAgente: (agente: Agente) => void;
}

export const AgenteDetailPanel = ({ agente, onClose, onUpdateAgente }: AgenteDetailPanelProps) => {
  if (!agente) return null;

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
          <h2 className="text-xl font-bold text-white">Detalhes do Agente</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>
        
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div>
            <label className="text-sm text-white/50">Nome</label>
            <input
              type="text"
              value={agente.nome}
              onChange={(e) => onUpdateAgente({ ...agente, nome: e.target.value })}
              className="w-full bg-transparent text-lg text-white font-semibold border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-white/50">Email</label>
            <input
              type="email"
              value={agente.email}
              onChange={(e) => onUpdateAgente({ ...agente, email: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${agente.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'}`}>{agente.status}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${agente.tipo === 'AI' ? 'bg-blue-600/30 text-blue-400' : 'bg-green-600/30 text-green-400'}`}>{agente.tipo}</span>
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">Leads: {agente.leads}</span>
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">Meta: {agente.meta}</span>
          </div>

          {agente.tipo === 'AI' && (
            <>
              <div>
                <label className="text-sm text-white/50">Base de Conhecimento</label>
                <textarea
                  value={agente.baseConhecimento}
                  onChange={(e) => onUpdateAgente({ ...agente, baseConhecimento: e.target.value })}
                  className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm text-white/50">Comportamento</label>
                <textarea
                  value={agente.comportamento}
                  onChange={(e) => onUpdateAgente({ ...agente, comportamento: e.target.value })}
                  className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
                  rows={3}
                />
              </div>
            </>
          )}
        </div>

        <div className="p-6 border-t border-blue-500/20 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Integrar WhatsApp</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Zap className="w-5 h-5" />
            <span className="text-xs">Ativar/Desativar</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
