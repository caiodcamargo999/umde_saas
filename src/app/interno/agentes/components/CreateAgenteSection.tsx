'use client';
import { Brain, Lightbulb } from 'lucide-react';

interface NewAgente {
  nome: string;
  email: string;
  tipo: string;
  baseConhecimento: string;
  comportamento: string;
}

interface CreateAgenteSectionProps {
  newAgente: NewAgente;
  setNewAgente: (agente: NewAgente) => void;
  handleCreateAgente: () => void;
}

export const CreateAgenteSection = ({ newAgente, setNewAgente, handleCreateAgente }: CreateAgenteSectionProps) => {
  return (
    <div className="mb-8 p-6 rounded-2xl bg-[#101C3A]/50 border border-blue-500/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-blue-500/20">
          <Brain className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Criar Agente AI</h2>
          <p className="text-white/70">Descreva o agente AI que você quer e nós criamos.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Nome do Agente</label>
            <input
              type="text"
              value={newAgente.nome}
              onChange={(e) => setNewAgente({...newAgente, nome: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Ex: Agente Vila Mariana"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Email (opcional)</label>
            <input
              type="email"
              value={newAgente.email}
              onChange={(e) => setNewAgente({...newAgente, email: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="agente@umde.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Base de Conhecimento</label>
            <textarea
              value={newAgente.baseConhecimento}
              onChange={(e) => setNewAgente({...newAgente, baseConhecimento: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              rows={4}
              placeholder="Descreva o conhecimento específico que este agente deve ter (ex: mercado de Vila Mariana, tipos de imóveis, etc.)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Comportamento do Agente</label>
            <textarea
              value={newAgente.comportamento}
              onChange={(e) => setNewAgente({...newAgente, comportamento: e.target.value})}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              rows={4}
              placeholder="Descreva como este agente deve se comportar (ex: proativo, consultivo, focado em dados, etc.)"
            />
          </div>

          <button
            onClick={handleCreateAgente}
            className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
          >
            Criar Agente AI
          </button>
        </div>

        <div className="p-4 rounded-lg bg-[#1A2332]/50 border border-blue-500/10">
          <h3 className="text-lg font-bold text-white mb-4">Exemplos de Prompts</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                &quot;Agente especialista em investimentos imobiliários, analítico e orientado a dados&quot;
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                &quot;Agente para imóveis comerciais, profissional e formal, focado em empresas&quot;
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <p className="text-white/90 text-sm">
                &quot;Agente consultivo para primeira compra, paciente e educativo&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
