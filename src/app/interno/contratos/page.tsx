'use client';
import { useState } from "react";
import { ContratoTable } from "./components/ContratoTable";
import { ContratoDetailPanel } from "./components/ContratoDetailPanel";
import { ContratosHeader } from "./components/ContratosHeader";
import { ContratoFilters } from "./components/ContratoFilters";
import { CreateContratoSection } from "./components/CreateContratoSection";
import { ModelosContratoModal } from "./components/ModelosContratoModal";

const initialContratos = [
  {
    id: "1",
    numero: "#2024-001",
    cliente: "João Silva",
    status: "Ativo",
    valor: "R$ 500.000",
    tipo: "Venda",
    acordo: "Venda de apartamento de 2 quartos em Vila Mariana",
    dadosPartes: "Vendedor: João Silva, CPF: 123.456.789-00, Endereço: Rua A, 123. Comprador: Maria Santos, CPF: 987.654.321-00, Endereço: Rua B, 456.",
    modeloUsado: "Modelo Venda Residencial",
    dataCriacao: "2024-01-15",
    regiao: "São Paulo"
  },
  {
    id: "2",
    numero: "#2024-002",
    cliente: "Maria Souza",
    status: "Pendente",
    valor: "R$ 320.000",
    tipo: "Venda",
    acordo: "Venda de casa em condomínio fechado",
    dadosPartes: "Vendedor: Maria Souza, CPF: 111.222.333-44. Comprador: Carlos Lima, CPF: 555.666.777-88.",
    modeloUsado: "Modelo Venda Residencial",
    dataCriacao: "2024-01-20",
    regiao: "Rio de Janeiro"
  },
  {
    id: "3",
    numero: "#2024-003",
    cliente: "Carlos Lima",
    status: "Finalizado",
    valor: "R$ 1.200.000",
    tipo: "Aluguel",
    acordo: "Aluguel de sala comercial por 24 meses",
    dadosPartes: "Locador: Carlos Lima, CNPJ: 12.345.678/0001-90. Locatário: Empresa ABC Ltda, CNPJ: 98.765.432/0001-10.",
    modeloUsado: "Modelo Aluguel Comercial",
    dataCriacao: "2024-01-10",
    regiao: "Belo Horizonte"
  },
  {
    id: "4",
    numero: "#2024-004",
    cliente: "Ana Paula",
    status: "Ativo",
    valor: "R$ 800.000",
    tipo: "Parceria",
    acordo: "Parceria para desenvolvimento de projeto residencial",
    dadosPartes: "Parceiro A: Ana Paula, CPF: 123.456.789-00. Parceiro B: UMDÊ Imóveis, CNPJ: 11.222.333/0001-44.",
    modeloUsado: "Modelo Parceria Investidor",
    dataCriacao: "2024-01-25",
    regiao: "São Paulo"
  },
];

const modelosContrato = [
  {
    id: "1",
    nome: "Modelo Venda Residencial",
    tipo: "Venda",
    descricao: "Contrato padrão para venda de imóveis residenciais",
    regiao: "São Paulo",
    arquivo: "modelo-venda-residencial-sp.pdf"
  },
  {
    id: "2",
    nome: "Modelo Aluguel Comercial",
    tipo: "Aluguel",
    descricao: "Contrato para aluguel de salas comerciais",
    regiao: "Nacional",
    arquivo: "modelo-aluguel-comercial.pdf"
  },
  {
    id: "3",
    nome: "Modelo Parceria Investidor",
    tipo: "Parceria",
    descricao: "Contrato de parceria para investimentos imobiliários",
    regiao: "Nacional",
    arquivo: "modelo-parceria-investidor.pdf"
  },
  {
    id: "4",
    nome: "Modelo Venda Terreno",
    tipo: "Venda",
    descricao: "Contrato para venda de terrenos",
    regiao: "São Paulo",
    arquivo: "modelo-venda-terreno-sp.pdf"
  }
];

export type Contrato = typeof initialContratos[number];
export type ModeloContrato = typeof modelosContrato[number];

export default function ContratosPage() {
  const [contratos, setContratos] = useState<Contrato[]>(initialContratos);
  const [selectedContrato, setSelectedContrato] = useState<Contrato | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showModelosModal, setShowModelosModal] = useState(false);
  const [newContrato, setNewContrato] = useState({
    acordo: "",
    dadosPartes: "",
    tipo: "Venda",
    valor: "",
    cliente: "",
    regiao: "São Paulo"
  });

  // Filtros avançados
  const [filtroNumero, setFiltroNumero] = useState("");
  const [filtroStatus, setFiltroStatus] = useState<string[]>([]);
  const [filtroTipo, setFiltroTipo] = useState<string[]>([]);
  const [filtroRegiao, setFiltroRegiao] = useState<string[]>([]);
  const [filtroValorMin, setFiltroValorMin] = useState("");
  const [filtroValorMax, setFiltroValorMax] = useState("");

  const contratosFiltrados = contratos.filter(contrato => {
    const matchNumero = !filtroNumero || 
      contrato.numero.toLowerCase().includes(filtroNumero.toLowerCase()) ||
      contrato.cliente.toLowerCase().includes(filtroNumero.toLowerCase());
    const matchStatus = filtroStatus.length === 0 || filtroStatus.includes(contrato.status);
    const matchTipo = filtroTipo.length === 0 || filtroTipo.includes(contrato.tipo);
    const matchRegiao = filtroRegiao.length === 0 || filtroRegiao.includes(contrato.regiao);
    const valorNumerico = parseInt(contrato.valor.replace(/\D/g, ''));
    const matchValor = (!filtroValorMin || valorNumerico >= parseInt(filtroValorMin.replace(/\D/g, ''))) &&
                      (!filtroValorMax || valorNumerico <= parseInt(filtroValorMax.replace(/\D/g, '')));
    
    return matchNumero && matchStatus && matchTipo && matchRegiao && matchValor;
  });

  const limparFiltros = () => {
    setFiltroNumero("");
    setFiltroStatus([]);
    setFiltroTipo([]);
    setFiltroRegiao([]);
    setFiltroValorMin("");
    setFiltroValorMax("");
  };

  const handleGerarContratoAI = () => {
    // Simulação de geração de contrato com AI
    alert("Contrato gerado com AI! (Simulação)");
    setShowCreateModal(false);
  };

  const handleUsarModelo = (modelo: ModeloContrato) => {
    setNewContrato({...newContrato, tipo: modelo.tipo});
    setShowModelosModal(false);
    alert(`Modelo "${modelo.nome}" selecionado como base!`);
  };

  const handleUpdateContrato = (updatedContrato: Contrato) => {
    setContratos(contratos.map(c => c.id === updatedContrato.id ? updatedContrato : c));
    setSelectedContrato(updatedContrato);
  };

  const regioesDisponiveis = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Florianópolis"];

  return (
    <div className="w-full px-2 md:px-8 xl:px-16">
      <ContratosHeader 
        onSearch={setFiltroNumero} 
        onCreateContrato={() => setShowCreateModal(true)} 
        onShowModelos={() => setShowModelosModal(true)}
      />

      <ContratoFilters 
        filtroNumero={filtroNumero} setFiltroNumero={setFiltroNumero}
        filtroStatus={filtroStatus} setFiltroStatus={setFiltroStatus}
        filtroTipo={filtroTipo} setFiltroTipo={setFiltroTipo}
        filtroRegiao={filtroRegiao} setFiltroRegiao={setFiltroRegiao}
        filtroValorMin={filtroValorMin} setFiltroValorMin={setFiltroValorMin}
        filtroValorMax={filtroValorMax} setFiltroValorMax={setFiltroValorMax}
        limparFiltros={limparFiltros}
      />

      <ContratoTable contratos={contratosFiltrados} onContratoClick={setSelectedContrato} />

      <ContratoDetailPanel 
        contrato={selectedContrato} 
        onClose={() => setSelectedContrato(null)} 
        onUpdateContrato={handleUpdateContrato}
      />

      {showCreateModal && (
        <CreateContratoSection 
          newContrato={newContrato} 
          setNewContrato={setNewContrato} 
          handleGerarContratoAI={handleGerarContratoAI}
          setShowModelosModal={setShowModelosModal}
          regioesDisponiveis={regioesDisponiveis}
          showCreateModal={showCreateModal}
          setShowCreateModal={setShowCreateModal}
        />
      )}

      <ModelosContratoModal 
        showModelosModal={showModelosModal}
        setShowModelosModal={setShowModelosModal}
        modelosContrato={modelosContrato}
        handleUsarModelo={handleUsarModelo}
      />
    </div>
  );
}