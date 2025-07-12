'use client';
import { useState } from "react";
import { AgenteTable } from "./components/AgenteTable";
import { AgenteDetailPanel } from "./components/AgenteDetailPanel";
import { AgentesHeader } from "./components/AgentesHeader";
import { AgenteFilters } from "./components/AgenteFilters";
import { CreateAgenteSection } from "./components/CreateAgenteSection";

const initialAgentes = [
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

export type Agente = typeof initialAgentes[number];

export default function AgentesPage() {
  const [agentes, setAgentes] = useState<Agente[]>(initialAgentes);
  const [selectedAgente, setSelectedAgente] = useState<Agente | null>(null);
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
    // Aqui seria a lógica para integrar com backend/AI para criar o agente
    alert("Funcionalidade de criar agente AI será implementada!");
    // Exemplo de como adicionar um novo agente (apenas para demonstração)
    // setAgentes([...agentes, { ...newAgente, id: String(agentes.length + 1), status: "Ativo", leads: 0, meta: "R$ 0" }]);
    setNewAgente({ nome: "", email: "", tipo: "AI", baseConhecimento: "", comportamento: "" });
  };

  const handleUpdateAgente = (updatedAgente: Agente) => {
    setAgentes(agentes.map(a => a.id === updatedAgente.id ? updatedAgente : a));
    setSelectedAgente(updatedAgente);
  };

  return (
    <div className="w-full max-w-full px-4 md:px-8 xl:px-16 overflow-x-hidden">
      <AgentesHeader onAddAgente={() => alert("Abrir modal de criação de agente!")} />

      <CreateAgenteSection 
        newAgente={newAgente} 
        setNewAgente={setNewAgente} 
        handleCreateAgente={handleCreateAgente} 
      />

      <AgenteFilters 
        filtroNome={filtroNome} setFiltroNome={setFiltroNome}
        filtroStatus={filtroStatus} setFiltroStatus={setFiltroStatus}
        filtroTipo={filtroTipo} setFiltroTipo={setFiltroTipo}
        filtroLeadsMin={filtroLeadsMin} setFiltroLeadsMin={setFiltroLeadsMin}
        filtroLeadsMax={filtroLeadsMax} setFiltroLeadsMax={setFiltroLeadsMax}
        limparFiltros={limparFiltros}
      />

      <AgenteTable agentes={agentesFiltrados} onAgenteClick={setSelectedAgente} />

      <AgenteDetailPanel 
        agente={selectedAgente} 
        onClose={() => setSelectedAgente(null)} 
        onUpdateAgente={handleUpdateAgente}
      />
    </div>
  );
}