"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const agentes = [
  { 
    id: "1",
    nome: "Lucas Martins", 
    email: "lucas@umde.com", 
    status: "Ativo", 
    leads: 12, 
    meta: "R$ 1M",
    tipo: "AI",
    baseConhecimento: "Especialista em imóveis residenciais de alto padrão em São Paulo. Conhece bem o mercado de Vila Mariana, Jardim Europa e Moema.",
    comportamento: "Agente proativo e consultivo. Sempre pergunta sobre necessidades específicas do cliente antes de apresentar opções. Foca em valor agregado e não apenas preço."
  },
  { 
    id: "2",
    nome: "Fernanda Dias", 
    email: "fernanda@umde.com", 
    status: "Ativo", 
    leads: 8, 
    meta: "R$ 800K",
    tipo: "AI",
    baseConhecimento: "Especialista em investimentos imobiliários e análise de ROI. Conhece bem o mercado de aluguel e revenda.",
    comportamento: "Agente analítico e orientado a dados. Apresenta sempre números e projeções de retorno. Foca em oportunidades de investimento."
  },
  { 
    id: "3",
    nome: "Rafael Costa", 
    email: "rafael@umde.com", 
    status: "Inativo", 
    leads: 0, 
    meta: "-",
    tipo: "Humano",
    baseConhecimento: "",
    comportamento: ""
  },
  { 
    id: "4",
    nome: "Juliana Alves", 
    email: "juliana@umde.com", 
    status: "Ativo", 
    leads: 15, 
    meta: "R$ 1.2M",
    tipo: "AI",
    baseConhecimento: "Especialista em imóveis comerciais e salas. Conhece bem o mercado corporativo e necessidades de empresas.",
    comportamento: "Agente profissional e formal. Foca em benefícios fiscais e vantagens para empresas. Sempre pede informações sobre o negócio."
  },
];

type Agente = typeof agentes[number];

export default function AgentesPage() {
  const [selectedAgente, setSelectedAgente] = useState<Agente | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAgente, setNewAgente] = useState({
    nome: "",
    email: "",
    tipo: "AI",
    baseConhecimento: "",
    comportamento: ""
  });
  
  // Filtros avançados
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<string[]>([]);
  const [filtroTipo, setFiltroTipo] = useState<string[]>([]);
  const [filtroLeadsMin, setFiltroLeadsMin] = useState("");
  const [filtroLeadsMax, setFiltroLeadsMax] = useState("");
  
  const agentesFiltrados = agentes.filter(agente => {
    const matchNome = !filtroNome || 
      agente.nome.toLowerCase().includes(filtroNome.toLowerCase()) ||
      agente.email.toLowerCase().includes(filtroNome.toLowerCase());
    const matchStatus = filtroStatus.length === 0 || filtroStatus.includes(agente.status);
    const matchTipo = filtroTipo.length === 0 || filtroTipo.includes(agente.tipo);
    const matchLeads = (!filtroLeadsMin || agente.leads >= parseInt(filtroLeadsMin)) &&
                      (!filtroLeadsMax || agente.leads <= parseInt(filtroLeadsMax));
    
    return matchNome && matchStatus && matchTipo && matchLeads;
  });

  const limparFiltros = () => {
    setFiltroNome("");
    setFiltroStatus([]);
    setFiltroTipo([]);
    setFiltroLeadsMin("");
    setFiltroLeadsMax("");
  };

  const handleCreateAgente = () => {
    // Aqui seria a integração com backend/AI
    console.log("Criando agente AI:", newAgente);
    setShowCreateModal(false);
    setNewAgente({ nome: "", email: "", tipo: "AI", baseConhecimento: "", comportamento: "" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-2 sm:py-4 md:py-6 pb-20 md:pb-6">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white/90 tracking-tight">Agentes SDR de AI</h1>
        <div className="flex gap-2 w-full">
          <button 
            className="px-3 sm:px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] text-sm"
            onClick={() => setShowCreateModal(true)}
          >
            + Criar Agente AI
          </button>
        </div>
      </div>

      {/* Filtros Avançados */}
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <label className="text-white/70 text-xs sm:text-sm mb-1 block">Buscar por nome/email</label>
            <input
              type="text"
              placeholder="Digite para buscar..."
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
              className="w-full px-2.5 sm:px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition text-sm"
            />
          </div>
          
          <div>
            <label className="text-white/70 text-xs sm:text-sm mb-1 block">Status</label>
            <div className="flex gap-2">
              {["Ativo", "Inativo"].map(status => (
                <label key={status} className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    checked={filtroStatus.includes(status)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFiltroStatus([...filtroStatus, status]);
                      } else {
                        setFiltroStatus(filtroStatus.filter(s => s !== status));
                      }
                    }}
                    className="rounded border-[#0D4FF7]/30 bg-[#0D1A3A]"
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-white/70 text-xs sm:text-sm mb-1 block">Tipo</label>
            <div className="flex gap-2">
              {["AI", "Humano"].map(tipo => (
                <label key={tipo} className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    checked={filtroTipo.includes(tipo)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFiltroTipo([...filtroTipo, tipo]);
                      } else {
                        setFiltroTipo(filtroTipo.filter(t => t !== tipo));
                      }
                    }}
                    className="rounded border-[#0D4FF7]/30 bg-[#0D1A3A]"
                  />
                  {tipo}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-white/70 text-xs sm:text-sm mb-1 block">Leads (mín)</label>
            <input
              type="number"
              placeholder="0"
              value={filtroLeadsMin}
              onChange={(e) => setFiltroLeadsMin(e.target.value)}
              className="w-full px-2.5 sm:px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition text-sm"
            />
          </div>

          <div>
            <label className="text-white/70 text-xs sm:text-sm mb-1 block">Leads (máx)</label>
            <input
              type="number"
              placeholder="100"
              value={filtroLeadsMax}
              onChange={(e) => setFiltroLeadsMax(e.target.value)}
              className="w-full px-2.5 sm:px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition text-sm"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={limparFiltros}
              className="px-3 sm:px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Seção CRIAR - Criação de Agentes AI */}
      <motion.div
        className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#0D4FF7]/20 rounded-lg sm:rounded-xl flex items-center justify-center">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="text-[#0D4FF7] sm:w-4 sm:h-4 md:w-5 md:h-5">
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white">CRIAR</h2>
            <p className="text-white/70 text-xs sm:text-sm">Descreva o agente AI que você quer e nós criamos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div>
              <label className="text-white/80 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Descreva o agente AI que você precisa</label>
              <textarea
                className="w-full px-2.5 sm:px-3 md:px-4 py-2 md:py-3 rounded-lg sm:rounded-xl bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none text-sm"
                rows={3}
                placeholder="Ex: Preciso de um agente AI especialista em imóveis residenciais de alto padrão em São Paulo, que seja proativo e consultivo, focado em Vila Mariana e Jardim Europa, com conhecimento profundo do mercado local..."
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button className="flex-1 px-2.5 sm:px-3 md:px-4 py-2 md:py-3 rounded-lg sm:rounded-xl bg-[#0D4FF7] text-white font-bold hover:bg-[#0D4FF7]/80 transition-all shadow-lg text-sm">
                Criar Agente AI
              </button>
              <button className="px-2.5 sm:px-3 md:px-4 py-2 md:py-3 rounded-lg sm:rounded-xl bg-white/10 text-white border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm">
                Ver Templates
              </button>
            </div>
          </div>

          <div className="bg-[#1A2332]/50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-[#0D4FF7]/10">
            <h3 className="text-white font-semibold mb-2 md:mb-3 text-xs sm:text-sm md:text-base">Exemplos de prompts</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <div className="p-2 md:p-3 bg-[#0D4FF7]/10 rounded-lg border border-[#0D4FF7]/20">
                <p className="text-white/90">&quot;Agente especialista em investimentos imobiliários, analítico e orientado a dados&quot;</p>
              </div>
              <div className="p-2 md:p-3 bg-[#0D4FF7]/10 rounded-lg border border-[#0D4FF7]/20">
                <p className="text-white/90">&quot;Agente para imóveis comerciais, profissional e formal, focado em empresas&quot;</p>
              </div>
              <div className="p-2 md:p-3 bg-[#0D4FF7]/10 rounded-lg border border-[#0D4FF7]/20">
                <p className="text-white/90">&quot;Agente consultivo para primeira compra, paciente e educativo&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="overflow-x-auto rounded-xl sm:rounded-2xl shadow-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-[#0D4FF7] text-xs sm:text-sm font-bold">
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">Nome</th>
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">Email</th>
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">Tipo</th>
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">Status</th>
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">Leads</th>
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">Meta</th>
              <th className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {agentesFiltrados.map(agente => (
              <tr key={agente.id} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition cursor-pointer" onClick={() => setSelectedAgente(agente)}>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-white/90 text-xs sm:text-sm">{agente.nome}</td>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-white/70 text-xs sm:text-sm">{agente.email}</td>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">
                  <span className={`px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${agente.tipo === 'AI' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-green-600/30 text-green-400'}`}>{agente.tipo}</span>
                </td>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4">
                  <span className={`px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${agente.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-red-600/30 text-red-400'}`}>{agente.status}</span>
                </td>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-white/90 text-xs sm:text-sm">{agente.leads}</td>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-white/70 text-xs sm:text-sm">{agente.meta}</td>
                <td className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 text-right">
                  <button className="px-2 sm:px-3 py-1 rounded-lg bg-[#0D4FF7]/80 text-white text-xs font-bold shadow hover:bg-[#0D4FF7] transition-all" onClick={e => {e.stopPropagation(); setSelectedAgente(agente);}}>Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Modal de Criação de Agente AI */}
      {showCreateModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0D4FF7]">Criar Agente AI</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-white/60 text-xl sm:text-2xl font-bold hover:text-white transition"
              >×</button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-white/80 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Nome do Agente</label>
                <input
                  type="text"
                  value={newAgente.nome}
                  onChange={(e) => setNewAgente({...newAgente, nome: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition text-sm"
                  placeholder="Ex: Agente Vila Mariana"
                />
              </div>

              <div>
                <label className="text-white/80 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Email (opcional)</label>
                <input
                  type="email"
                  value={newAgente.email}
                  onChange={(e) => setNewAgente({...newAgente, email: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition text-sm"
                  placeholder="agente@umde.com"
                />
              </div>

              <div>
                <label className="text-white/80 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Base de Conhecimento</label>
                <textarea
                  value={newAgente.baseConhecimento}
                  onChange={(e) => setNewAgente({...newAgente, baseConhecimento: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none text-sm"
                  rows={4}
                  placeholder="Descreva o conhecimento específico que este agente deve ter (ex: mercado de Vila Mariana, tipos de imóveis, etc.)"
                />
              </div>

              <div>
                <label className="text-white/80 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Comportamento do Agente</label>
                <textarea
                  value={newAgente.comportamento}
                  onChange={(e) => setNewAgente({...newAgente, comportamento: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none text-sm"
                  rows={4}
                  placeholder="Descreva como este agente deve se comportar (ex: proativo, consultivo, focado em dados, etc.)"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                <button
                  onClick={handleCreateAgente}
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all text-sm"
                >
                  Criar Agente AI
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Painel lateral de detalhamento do agente */}
      {selectedAgente && (
        <motion.div
          className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border-l border-[#0D4FF7]/30 shadow-2xl z-50 flex flex-col p-3 sm:p-4 md:p-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white/60 text-xl sm:text-2xl font-bold hover:text-white transition"
            onClick={() => setSelectedAgente(null)}
            aria-label="Fechar"
          >×</button>
          
          {/* Edição inline */}
          <input
            className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0D4FF7] mb-2 bg-transparent border-b border-[#0D4FF7]/40 focus:outline-none focus:border-[#0D4FF7] transition text-sm sm:text-base"
            value={selectedAgente.nome}
            onChange={e => setSelectedAgente({ ...selectedAgente, nome: e.target.value })}
          />
          <input
            className="text-white/80 mb-3 sm:mb-4 bg-transparent border-b border-[#0D4FF7]/20 focus:outline-none focus:border-[#0D4FF7] transition text-sm"
            value={selectedAgente.email}
            onChange={e => setSelectedAgente({ ...selectedAgente, email: e.target.value })}
          />
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${selectedAgente.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-red-600/30 text-red-400'}`}>{selectedAgente.status}</span>
            <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${selectedAgente.tipo === 'AI' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-green-600/30 text-green-400'}`}>{selectedAgente.tipo}</span>
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-white/10 text-white">Leads: {selectedAgente.leads}</span>
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-white/10 text-white">Meta: {selectedAgente.meta}</span>
          </div>

          {selectedAgente.tipo === 'AI' && (
            <>
              <div className="mb-3 sm:mb-4">
                <label className="text-white/70 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Base de Conhecimento</label>
                <textarea
                  value={selectedAgente.baseConhecimento}
                  onChange={e => setSelectedAgente({ ...selectedAgente, baseConhecimento: e.target.value })}
                  className="w-full px-2.5 sm:px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none text-sm"
                  rows={3}
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="text-white/70 text-xs sm:text-sm font-bold mb-1 sm:mb-2 block">Comportamento</label>
                <textarea
                  value={selectedAgente.comportamento}
                  onChange={e => setSelectedAgente({ ...selectedAgente, comportamento: e.target.value })}
                  className="w-full px-2.5 sm:px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none text-sm"
                  rows={3}
                />
              </div>
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-2 mt-auto">
            <button className="px-3 sm:px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow hover:bg-blue-700 transition-all text-sm">Integrar WhatsApp</button>
            <button className="px-3 sm:px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm">Ativar/Desativar</button>
          </div>
          
          {/* Estrutura para integração real-time futura (ex: useEffect para sync) */}
        </motion.div>
      )}
    </div>
  );
} 