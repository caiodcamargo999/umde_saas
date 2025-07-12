'use client';
import { FilePlus, Lightbulb } from 'lucide-react';

interface NewContrato {
  acordo: string;
  dadosPartes: string;
  tipo: string;
  valor: string;
  cliente: string;
  regiao: string;
}

interface CreateContratoSectionProps {
  newContrato: NewContrato;
  setNewContrato: (contrato: NewContrato) => void;
  handleGerarContratoAI: () => void;
  setShowModelosModal: (show: boolean) => void;
  regioesDisponiveis: string[];
  showCreateModal: boolean;
  setShowCreateModal: (show: boolean) => void;
}

export const CreateContratoSection = ({
  newContrato,
  setNewContrato,
  handleGerarContratoAI,
  setShowModelosModal,
  regioesDisponiveis
}: CreateContratoSectionProps) => {
  return (
    <div className="mb-8 p-6 rounded-2xl bg-[#101C3A]/50 border border-blue-500/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-blue-500/20">
          <FilePlus className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Criar Contrato com AI</h2>
          <p className="text-white/70">Descreva o que você quer e nossa AI gera o contrato completo.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Tipo de Contrato</label>
            <select
              value={newContrato.tipo}
              onChange={(e) => setNewContrato({...newContrato, tipo: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="Venda">Venda</option>
              <option value="Aluguel">Aluguel</option>
              <option value="Parceria">Parceria</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Região</label>
            <select
              value={newContrato.regiao}
              onChange={(e) => setNewContrato({...newContrato, regiao: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {regioesDisponiveis.map(regiao => (
                <option key={regiao} value={regiao}>{regiao}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Descreva o Acordo</label>
            <textarea
              value={newContrato.acordo}
              onChange={(e) => setNewContrato({...newContrato, acordo: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              rows={3}
              placeholder="Descreva o acordo que deseja formalizar (ex: venda de apartamento, aluguel de sala comercial, parceria para desenvolvimento, etc.)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Dados das Partes</label>
            <textarea
              value={newContrato.dadosPartes}
              onChange={(e) => setNewContrato({...newContrato, dadosPartes: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              rows={4}
              placeholder="Informe os dados das partes envolvidas (nomes, CPF/CNPJ, endereços, etc.)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Cliente Principal</label>
            <input
              type="text"
              value={newContrato.cliente}
              onChange={(e) => setNewContrato({...newContrato, cliente: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Nome do cliente principal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Valor</label>
            <input
              type="text"
              value={newContrato.valor}
              onChange={(e) => setNewContrato({...newContrato, valor: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="R$ 500.000"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleGerarContratoAI}
              className="flex-1 px-6 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
            >
              Gerar Contrato com AI
            </button>
            <button
              onClick={() => setShowModelosModal(true)}
              className="px-6 py-2 rounded-lg bg-white/10 text-white font-bold border border-blue-500/40 hover:bg-blue-500/20 transition-all"
            >
              Usar Modelo
            </button>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#1A2332]/50 border border-blue-500/10">
          <h3 className="text-lg font-bold text-white mb-4">Exemplos de Prompts</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                &quot;Contrato de aluguel de sala comercial por 24 meses, valor R$ 5.000/mês&quot;
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                &quot;Parceria para desenvolvimento de projeto residencial, 50/50&quot;
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                &quot;Venda de terreno de 500m², financiamento direto&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
