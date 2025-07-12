'use client';
import { useState } from "react";
import { InvestidorTable } from "./components/InvestidorTable";
import { InvestidorDetailPanel } from "./components/InvestidorDetailPanel";
import { InvestidoresHeader } from "./components/InvestidoresHeader";
import { InvestidorFilters } from "./components/InvestidorFilters";
import { CreateInvestidorModal } from "./components/CreateInvestidorModal";

const initialInvestidores = [
  {
    id: "1",
    nome: "Bruno Torres",
    email: "bruno@umde.com",
    status: "Ativo",
    investimentos: 3,
    total: "R$ 2.500.000",
    tipo: "Real Estate",
    objetivos: ["Renda", "Flip"],
    procura: "Imóveis residenciais em São Paulo, preferencialmente Vila Mariana e Jardim Europa. Interessado em apartamentos de 2-3 quartos para aluguel e revenda.",
    faixaValor: "R$ 500K - R$ 1.5M",
    regioes: ["São Paulo", "Rio de Janeiro"]
  },
  {
    id: "2",
    nome: "Patrícia Lima",
    email: "patricia@umde.com",
    status: "Ativo",
    investimentos: 1,
    total: "R$ 900.000",
    tipo: "Business",
    objetivos: ["Parceria"],
    procura: "Oportunidades de parceria em desenvolvimento imobiliário. Interessada em projetos comerciais e residenciais de médio porte.",
    faixaValor: "R$ 1M - R$ 5M",
    regioes: ["São Paulo", "Belo Horizonte"]
  },
  {
    id: "3",
    nome: "Eduardo Silva",
    email: "eduardo@umde.com",
    status: "Inativo",
    investimentos: 0,
    total: "-",
    tipo: "Real Estate",
    objetivos: [],
    procura: "",
    faixaValor: "",
    regioes: []
  },
  {
    id: "4",
    nome: "Marina Souza",
    email: "marina@umde.com",
    status: "Ativo",
    investimentos: 2,
    total: "R$ 1.200.000",
    tipo: "Real Estate",
    objetivos: ["Aluguel", "Renda"],
    procura: "Imóveis para aluguel de longo prazo. Foco em apartamentos de 1-2 quartos em regiões com boa valorização.",
    faixaValor: "R$ 300K - R$ 800K",
    regioes: ["São Paulo", "Florianópolis"]
  },
];

export type Investidor = typeof initialInvestidores[number];

const objetivosDisponiveis = ["Renda", "Flip", "Aluguel", "Parceria", "Desenvolvimento"];

export default function InvestidoresPage() {
  const [investidores, setInvestidores] = useState<Investidor[]>(initialInvestidores);
  const [selectedInvestidor, setSelectedInvestidor] = useState<Investidor | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newInvestidor, setNewInvestidor] = useState({
    nome: "",
    email: "",
    tipo: "Real Estate",
    objetivos: [] as string[],
    procura: "",
    faixaValor: "",
    regioes: [] as string[]
  });

  // Filtros avançados
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<string[]>([]);
  const [filtroTipo, setFiltroTipo] = useState<string[]>([]);
  const [filtroObjetivos, setFiltroObjetivos] = useState<string[]>([]);
  const [filtroInvestimentosMin, setFiltroInvestimentosMin] = useState("");
  const [filtroInvestimentosMax, setFiltroInvestimentosMax] = useState("");

  const investidoresFiltrados = investidores.filter(investidor => {
    const matchNome = !filtroNome || 
      investidor.nome.toLowerCase().includes(filtroNome.toLowerCase()) ||
      investidor.email.toLowerCase().includes(filtroNome.toLowerCase());
    const matchStatus = filtroStatus.length === 0 || filtroStatus.includes(investidor.status);
    const matchTipo = filtroTipo.length === 0 || filtroTipo.includes(investidor.tipo);
    const matchObjetivos = filtroObjetivos.length === 0 || 
      filtroObjetivos.some(obj => investidor.objetivos.includes(obj));
    const matchInvestimentos = (!filtroInvestimentosMin || investidor.investimentos >= parseInt(filtroInvestimentosMin)) &&
                               (!filtroInvestimentosMax || investidor.investimentos <= parseInt(filtroInvestimentosMax));
    
    return matchNome && matchStatus && matchTipo && matchObjetivos && matchInvestimentos;
  });

  const limparFiltros = () => {
    setFiltroNome("");
    setFiltroStatus([]);
    setFiltroTipo([]);
    setFiltroObjetivos([]);
    setFiltroInvestimentosMin("");
    setFiltroInvestimentosMax("");
  };

  const handleCreateInvestidor = () => {
    // Aqui seria a integração com backend
    alert("Funcionalidade de adicionar investidor será implementada!");
    // Exemplo de como adicionar um novo investidor (apenas para demonstração)
    // setInvestidores([...investidores, { ...newInvestidor, id: String(investidores.length + 1), status: "Ativo", investimentos: 0, total: "R$ 0" }]);
    setNewInvestidor({ nome: "", email: "", tipo: "Real Estate", objetivos: [], procura: "", faixaValor: "", regioes: [] });
    setShowCreateModal(false);
  };

  const handleUpdateInvestidor = (updatedInvestidor: Investidor) => {
    setInvestidores(investidores.map(i => i.id === updatedInvestidor.id ? updatedInvestidor : i));
    setSelectedInvestidor(updatedInvestidor);
  };

  return (
    <div className="w-full px-2 md:px-8 xl:px-16">
      <InvestidoresHeader onSearch={setFiltroNome} onAddInvestidor={() => setShowCreateModal(true)} />

      <InvestidorFilters 
        filtroNome={filtroNome} setFiltroNome={setFiltroNome}
        filtroStatus={filtroStatus} setFiltroStatus={setFiltroStatus}
        filtroTipo={filtroTipo} setFiltroTipo={setFiltroTipo}
        filtroObjetivos={filtroObjetivos} setFiltroObjetivos={setFiltroObjetivos}
        filtroInvestimentosMin={filtroInvestimentosMin} setFiltroInvestimentosMin={setFiltroInvestimentosMin}
        filtroInvestimentosMax={filtroInvestimentosMax} setFiltroInvestimentosMax={setFiltroInvestimentosMax}
        limparFiltros={limparFiltros}
        objetivosDisponiveis={objetivosDisponiveis}
      />

      <InvestidorTable investidores={investidoresFiltrados} onInvestidorClick={setSelectedInvestidor} />

      <InvestidorDetailPanel 
        investidor={selectedInvestidor} 
        onClose={() => setSelectedInvestidor(null)} 
        onUpdateInvestidor={handleUpdateInvestidor}
      />

      <CreateInvestidorModal 
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        newInvestidor={newInvestidor}
        setNewInvestidor={setNewInvestidor}
        handleCreateInvestidor={handleCreateInvestidor}
        objetivosDisponiveis={objetivosDisponiveis}
      />
    </div>
  );
}