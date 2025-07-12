'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

interface NewInvestidor {
  nome: string;
  email: string;
  tipo: string;
  objetivos: string[];
  procura: string;
  faixaValor: string;
  regioes: string[];
}

interface CreateInvestidorModalProps {
  showCreateModal: boolean;
  setShowCreateModal: (show: boolean) => void;
  newInvestidor: NewInvestidor;
  setNewInvestidor: (investidor: NewInvestidor) => void;
  handleCreateInvestidor: () => void;
  objetivosDisponiveis: string[];
}

export const CreateInvestidorModal = ({
  showCreateModal,
  setShowCreateModal,
  newInvestidor,
  setNewInvestidor,
  handleCreateInvestidor,
  objetivosDisponiveis
}: CreateInvestidorModalProps) => {
  return (
    <AnimatePresence>
      {showCreateModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0D1A3A] border border-blue-500/30 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Adicionar Investidor</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Nome</label>
                <input
                  type="text"
                  value={newInvestidor.nome}
                  onChange={(e) => setNewInvestidor({...newInvestidor, nome: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Nome do investidor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  value={newInvestidor.email}
                  onChange={(e) => setNewInvestidor({...newInvestidor, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Tipo de Investidor</label>
                <select
                  value={newInvestidor.tipo}
                  onChange={(e) => setNewInvestidor({...newInvestidor, tipo: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="Real Estate">Real Estate</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Objetivos</label>
                <div className="flex flex-wrap gap-3">
                  {objetivosDisponiveis.map(objetivo => (
                    <label key={objetivo} className="flex items-center gap-2 text-white">
                      <input
                        type="checkbox"
                        checked={newInvestidor.objetivos.includes(objetivo)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewInvestidor({...newInvestidor, objetivos: [...newInvestidor.objetivos, objetivo]});
                          } else {
                            setNewInvestidor({...newInvestidor, objetivos: newInvestidor.objetivos.filter(o => o !== objetivo)});
                          }
                        }}
                        className="form-checkbox h-5 w-5 text-blue-600 bg-white/10 border-blue-500 rounded focus:ring-blue-500"
                      />
                      {objetivo}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">O que procura</label>
                <textarea
                  value={newInvestidor.procura}
                  onChange={(e) => setNewInvestidor({...newInvestidor, procura: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  rows={3}
                  placeholder="Descreva o que este investidor procura (tipos de imóveis, regiões, características, etc.)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Faixa de Valor</label>
                <input
                  type="text"
                  value={newInvestidor.faixaValor}
                  onChange={(e) => setNewInvestidor({...newInvestidor, faixaValor: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Ex: R$ 500K - R$ 2M"
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-2 rounded-lg bg-white/10 text-white font-bold border border-blue-500/40 hover:bg-blue-500/20 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCreateInvestidor}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
                >
                  Adicionar Investidor
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
