'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from 'lucide-react';
import type { ModeloContrato } from '../page';

interface ModelosContratoModalProps {
  showModelosModal: boolean;
  setShowModelosModal: (show: boolean) => void;
  modelosContrato: ModeloContrato[];
  handleUsarModelo: (modelo: ModeloContrato) => void;
}

export const ModelosContratoModal = ({
  showModelosModal,
  setShowModelosModal,
  modelosContrato,
  handleUsarModelo
}: ModelosContratoModalProps) => {
  return (
    <AnimatePresence>
      {showModelosModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0D1A3A] border border-blue-500/30 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Modelos de Contrato</h2>
              <button
                onClick={() => setShowModelosModal(false)}
                className="p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modelosContrato.map(modelo => (
                <div key={modelo.id} className="bg-[#1A2332]/50 rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer" onClick={() => handleUsarModelo(modelo)}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-full bg-blue-500/20">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{modelo.nome}</h3>
                      <p className="text-white/70 text-sm">{modelo.tipo}</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-4">{modelo.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 text-sm font-medium">{modelo.regiao}</span>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all">
                      Usar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
