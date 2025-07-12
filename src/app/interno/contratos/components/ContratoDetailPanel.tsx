'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Edit, Share2 } from 'lucide-react';
import type { Contrato } from '../page';

interface ContratoDetailPanelProps {
  contrato: Contrato | null;
  onClose: () => void;
  onUpdateContrato: (contrato: Contrato) => void;
}

export const ContratoDetailPanel = ({ contrato, onClose, onUpdateContrato }: ContratoDetailPanelProps) => {
  if (!contrato) return null;

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
          <h2 className="text-xl font-bold text-white">Detalhes do Contrato</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>
        
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div>
            <label className="text-sm text-white/50">Número</label>
            <input
              type="text"
              value={contrato.numero}
              onChange={(e) => onUpdateContrato({ ...contrato, numero: e.target.value })}
              className="w-full bg-transparent text-lg text-white font-semibold border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-white/50">Cliente</label>
            <input
              type="text"
              value={contrato.cliente}
              onChange={(e) => onUpdateContrato({ ...contrato, cliente: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${contrato.status === 'Ativo' ? 'bg-green-600/30 text-green-400' : contrato.status === 'Finalizado' ? 'bg-blue-600/30 text-blue-400' : 'bg-yellow-600/30 text-yellow-300'}`}>{contrato.status}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${contrato.tipo === 'Venda' ? 'bg-blue-600/30 text-blue-400' : contrato.tipo === 'Aluguel' ? 'bg-green-600/30 text-green-400' : 'bg-purple-600/30 text-purple-400'}`}>{contrato.tipo}</span>
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{contrato.valor}</span>
            <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{contrato.regiao}</span>
          </div>

          <div>
            <label className="text-sm text-white/50">Acordo</label>
            <textarea
              value={contrato.acordo}
              onChange={(e) => onUpdateContrato({ ...contrato, acordo: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm text-white/50">Dados das Partes</label>
            <textarea
              value={contrato.dadosPartes}
              onChange={(e) => onUpdateContrato({ ...contrato, dadosPartes: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
              rows={4}
            />
          </div>

          <div>
            <label className="text-sm text-white/50">Modelo Usado</label>
            <input
              type="text"
              value={contrato.modeloUsado}
              onChange={(e) => onUpdateContrato({ ...contrato, modeloUsado: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm text-white/50">Data de Criação</label>
            <input
              type="text"
              value={contrato.dataCriacao}
              onChange={(e) => onUpdateContrato({ ...contrato, dataCriacao: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
        </div>

        <div className="p-6 border-t border-blue-500/20 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Download className="w-5 h-5" />
            <span className="text-xs">Baixar PDF</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Edit className="w-5 h-5" />
            <span className="text-xs">Editar</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-xs">Compartilhar</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
