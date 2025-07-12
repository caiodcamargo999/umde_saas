'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, DollarSign, Target } from 'lucide-react';
import type { Investidor } from '../page';

interface InvestidorDetailPanelProps {
  investidor: Investidor | null;
  onClose: () => void;
  onUpdateInvestidor: (investidor: Investidor) => void;
}

export const InvestidorDetailPanel = ({ investidor, onClose, onUpdateInvestidor }: InvestidorDetailPanelProps) => {
  if (!investidor) return null;

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
          <h2 className="text-xl font-bold text-white">Detalhes do Investidor</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>
        
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div>
            <label className="text-sm text-white/50">Nome</label>
            <input
              type="text"
              value={investidor.nome}
              onChange={(e) => onUpdateInvestidor({ ...investidor, nome: e.target.value })}
              className="w-full bg-transparent text-lg text-white font-semibold border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-white/50">Email</label>
            <input
              type="email"
              value={investidor.email}
              onChange={(e) => onUpdateInvestidor({ ...investidor, email: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${investidor.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'}`}>{investidor.status}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${investidor.tipo === 'Real Estate' ? 'bg-blue-600/30 text-blue-400' : 'bg-green-600/30 text-green-400'}`}>{investidor.tipo}</span>
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">Investimentos: {investidor.investimentos}</span>
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">Total: {investidor.total}</span>
          </div>

          <div>
            <label className="text-sm text-white/50">Objetivos</label>
            <div className="flex flex-wrap gap-2">
              {investidor.objetivos.map(obj => (
                <span key={obj} className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{obj}</span>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-white/50">O que procura</label>
            <textarea
              value={investidor.procura}
              onChange={(e) => onUpdateInvestidor({ ...investidor, procura: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm text-white/50">Faixa de Valor</label>
            <div className="flex items-center gap-2 text-white/80">
              <DollarSign className="w-5 h-5" />
              <span>{investidor.faixaValor}</span>
            </div>
          </div>

          <div>
            <label className="text-sm text-white/50">Regiões</label>
            <div className="flex flex-wrap gap-2">
              {investidor.regioes.map(regiao => (
                <span key={regiao} className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{regiao}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-blue-500/20 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Target className="w-5 h-5" />
            <span className="text-xs">Agrupar em Deal</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="text-xs">Enviar Email</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
