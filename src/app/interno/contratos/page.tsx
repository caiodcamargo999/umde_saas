"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const contratos = [
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

type Contrato = typeof contratos[number];
type ModeloContrato = typeof modelosContrato[number];

export default function ContratosPage() {
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
    console.log("Gerando contrato com AI baseado em:", newContrato);
    alert("Contrato gerado com AI! (Simulação)");
  };

  const handleUsarModelo = (modelo: ModeloContrato) => {
    setNewContrato({...newContrato, tipo: modelo.tipo});
    setShowModelosModal(false);
    alert(`Modelo "${modelo.nome}" selecionado como base!`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-2 sm:py-4 md:py-6 pb-20 md:pb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white/90 tracking-tight">Contratos</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button 
            className="px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] text-sm"
            onClick={() => setShowCreateModal(true)}
          >
            + Criar Contrato com AI
          </button>
          <button 
            className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm"
            onClick={() => setShowModelosModal(true)}
          >
            Modelos de Contrato
          </button>
        </div>
      </div>

      {/* Filtros Avançados */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-white/70 text-sm mb-1 block">Buscar por número/cliente</label>
            <input
              type="text"
              placeholder="Digite para buscar..."
              value={filtroNumero}
              onChange={(e) => setFiltroNumero(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>
          
          <div>
            <label className="text-white/70 text-sm mb-1 block">Status</label>
            <div className="flex gap-2">
              {["Ativo", "Pendente", "Finalizado"].map(status => (
                <label key={status} className="flex items-center gap-2 text-white/70 text-sm">
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
            <label className="text-white/70 text-sm mb-1 block">Tipo</label>
            <div className="flex gap-2">
              {["Venda", "Aluguel", "Parceria"].map(tipo => (
                <label key={tipo} className="flex items-center gap-2 text-white/70 text-sm">
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
            <label className="text-white/70 text-sm mb-1 block">Região</label>
            <div className="flex gap-2">
              {["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Florianópolis"].map(regiao => (
                <label key={regiao} className="flex items-center gap-2 text-white/70 text-sm">
                  <input
                    type="checkbox"
                    checked={filtroRegiao.includes(regiao)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFiltroRegiao([...filtroRegiao, regiao]);
                      } else {
                        setFiltroRegiao(filtroRegiao.filter(r => r !== regiao));
                      }
                    }}
                    className="rounded border-[#0D4FF7]/30 bg-[#0D1A3A]"
                  />
                  {regiao}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-white/70 text-sm mb-1 block">Valor (mín)</label>
            <input
              type="text"
              placeholder="R$ 0"
              value={filtroValorMin}
              onChange={(e) => setFiltroValorMin(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm mb-1 block">Valor (máx)</label>
            <input
              type="text"
              placeholder="R$ 10M"
              value={filtroValorMax}
              onChange={(e) => setFiltroValorMax(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={limparFiltros}
              className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Seção CRIAR - Geração de Contratos com AI */}
      <motion.div
        className="mb-6 md:mb-8 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0D4FF7]/20 rounded-xl flex items-center justify-center">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#0D4FF7] md:w-5 md:h-5">
              <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white">CRIAR</h2>
            <p className="text-white/70 text-xs md:text-sm">Digite o que você quer e nossa AI gera o contrato completo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4">
            <div>
              <label className="text-white/80 text-xs md:text-sm font-bold mb-2 block">Descreva o que você precisa</label>
              <textarea
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none text-sm"
                rows={3}
                placeholder="Ex: Preciso de um contrato de venda de apartamento de 2 quartos em São Paulo, valor R$ 500.000, vendedor João Silva CPF 123.456.789-00, comprador Maria Santos CPF 987.654.321-00..."
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-[#0D4FF7] text-white font-bold hover:bg-[#0D4FF7]/80 transition-all shadow-lg text-sm">
                Gerar Contrato com AI
              </button>
              <button className="px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/10 text-white border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm">
                Usar Modelo
              </button>
            </div>
          </div>

          <div className="bg-[#1A2332]/50 rounded-xl p-3 md:p-4 border border-[#0D4FF7]/10">
            <h3 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">Exemplos de prompts</h3>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="p-2 md:p-3 bg-[#0D4FF7]/10 rounded-lg border border-[#0D4FF7]/20">
                <p className="text-white/90">&quot;Contrato de aluguel de sala comercial por 24 meses, valor R$ 5.000/mês&quot;</p>
              </div>
              <div className="p-2 md:p-3 bg-[#0D4FF7]/10 rounded-lg border border-[#0D4FF7]/20">
                <p className="text-white/90">&quot;Parceria para desenvolvimento de projeto residencial, 50/50&quot;</p>
              </div>
              <div className="p-2 md:p-3 bg-[#0D4FF7]/10 rounded-lg border border-[#0D4FF7]/20">
                <p className="text-white/90">&quot;Venda de terreno de 500m², financiamento direto&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="overflow-x-auto rounded-2xl shadow-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-[#0D4FF7] text-sm font-bold">
              <th className="px-6 py-4">Número</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Região</th>
              <th className="px-6 py-4">Modelo</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {contratosFiltrados.map(contrato => (
              <tr key={contrato.id} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition cursor-pointer" onClick={() => setSelectedContrato(contrato)}>
                <td className="px-6 py-4 font-semibold text-white/90">{contrato.numero}</td>
                <td className="px-6 py-4 text-white/70">{contrato.cliente}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${contrato.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : contrato.status === 'Finalizado' ? 'bg-green-600/30 text-green-400' : 'bg-yellow-600/20 text-yellow-300'}`}>{contrato.status}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${contrato.tipo === 'Venda' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : contrato.tipo === 'Aluguel' ? 'bg-green-600/30 text-green-400' : 'bg-purple-600/30 text-purple-400'}`}>{contrato.tipo}</span>
                </td>
                <td className="px-6 py-4 text-white/90">{contrato.valor}</td>
                <td className="px-6 py-4 text-white/70">{contrato.regiao}</td>
                <td className="px-6 py-4 text-white/70 text-xs">{contrato.modeloUsado}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 rounded-lg bg-[#0D4FF7]/80 text-white text-xs font-bold shadow hover:bg-[#0D4FF7] transition-all" onClick={e => {e.stopPropagation(); setSelectedContrato(contrato);}}>Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Modal de Criação de Contrato com AI */}
      {showCreateModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/30 rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0D4FF7]">Criar Contrato com AI</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-white/60 text-2xl font-bold hover:text-white transition"
              >×</button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/80 text-sm font-bold mb-2 block">Tipo de Contrato</label>
                  <select
                    value={newContrato.tipo}
                    onChange={(e) => setNewContrato({...newContrato, tipo: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                  >
                    <option value="Venda">Venda</option>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Parceria">Parceria</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/80 text-sm font-bold mb-2 block">Região</label>
                  <select
                    value={newContrato.regiao}
                    onChange={(e) => setNewContrato({...newContrato, regiao: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                  >
                    <option value="São Paulo">São Paulo</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Belo Horizonte">Belo Horizonte</option>
                    <option value="Florianópolis">Florianópolis</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Descreva o Acordo</label>
                <textarea
                  value={newContrato.acordo}
                  onChange={(e) => setNewContrato({...newContrato, acordo: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none"
                  rows={3}
                  placeholder="Descreva o acordo que deseja formalizar (ex: venda de apartamento, aluguel de sala comercial, parceria para desenvolvimento, etc.)"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Dados das Partes</label>
                <textarea
                  value={newContrato.dadosPartes}
                  onChange={(e) => setNewContrato({...newContrato, dadosPartes: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none"
                  rows={4}
                  placeholder="Informe os dados das partes envolvidas (nomes, CPF/CNPJ, endereços, etc.)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/80 text-sm font-bold mb-2 block">Cliente Principal</label>
                  <input
                    type="text"
                    value={newContrato.cliente}
                    onChange={(e) => setNewContrato({...newContrato, cliente: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                    placeholder="Nome do cliente principal"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm font-bold mb-2 block">Valor</label>
                  <input
                    type="text"
                    value={newContrato.valor}
                    onChange={(e) => setNewContrato({...newContrato, valor: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                    placeholder="R$ 500.000"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleGerarContratoAI}
                  className="flex-1 px-6 py-3 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
                >
                  Gerar Contrato com AI
                </button>
                <button
                  onClick={() => setShowModelosModal(true)}
                  className="px-6 py-3 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all"
                >
                  Usar Modelo
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-3 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal de Modelos de Contrato */}
      {showModelosModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/30 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0D4FF7]">Modelos de Contrato</h2>
              <button
                onClick={() => setShowModelosModal(false)}
                className="text-white/60 text-2xl font-bold hover:text-white transition"
              >×</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modelosContrato.map(modelo => (
                <div key={modelo.id} className="p-4 rounded-xl bg-white/5 border border-[#0D4FF7]/20 hover:border-[#0D4FF7]/40 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white/90">{modelo.nome}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${modelo.tipo === 'Venda' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : modelo.tipo === 'Aluguel' ? 'bg-green-600/30 text-green-400' : 'bg-purple-600/30 text-purple-400'}`}>
                      {modelo.tipo}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{modelo.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">{modelo.regiao}</span>
                    <button
                      onClick={() => handleUsarModelo(modelo)}
                      className="px-4 py-2 rounded-lg bg-[#0D4FF7] text-white text-sm font-bold hover:bg-blue-700 transition-all"
                    >
                      Usar Modelo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Painel lateral de detalhamento do contrato */}
      {selectedContrato && (
        <motion.div
          className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border-l border-[#0D4FF7]/30 shadow-2xl z-50 flex flex-col p-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            className="absolute top-4 right-4 text-white/60 text-2xl font-bold hover:text-white transition"
            onClick={() => setSelectedContrato(null)}
            aria-label="Fechar"
          >×</button>
          
          {/* Edição inline */}
          <input
            className="text-2xl font-extrabold text-[#0D4FF7] mb-2 bg-transparent border-b border-[#0D4FF7]/40 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedContrato.numero}
            onChange={e => setSelectedContrato({ ...selectedContrato, numero: e.target.value })}
          />
          <input
            className="text-white/80 mb-4 bg-transparent border-b border-[#0D4FF7]/20 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedContrato.cliente}
            onChange={e => setSelectedContrato({ ...selectedContrato, cliente: e.target.value })}
          />
          
          <div className="flex gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedContrato.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : selectedContrato.status === 'Finalizado' ? 'bg-green-600/30 text-green-400' : 'bg-yellow-600/20 text-yellow-300'}`}>{selectedContrato.status}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedContrato.tipo === 'Venda' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : selectedContrato.tipo === 'Aluguel' ? 'bg-green-600/30 text-green-400' : 'bg-purple-600/30 text-purple-400'}`}>{selectedContrato.tipo}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{selectedContrato.valor}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{selectedContrato.regiao}</span>
          </div>

          <div className="mb-4">
            <label className="text-white/70 text-sm font-bold mb-2 block">Acordo</label>
            <textarea
              value={selectedContrato.acordo}
              onChange={e => setSelectedContrato({ ...selectedContrato, acordo: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none"
              rows={2}
            />
          </div>

          <div className="mb-4">
            <label className="text-white/70 text-sm font-bold mb-2 block">Dados das Partes</label>
            <textarea
              value={selectedContrato.dadosPartes}
              onChange={e => setSelectedContrato({ ...selectedContrato, dadosPartes: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none"
              rows={3}
            />
          </div>

          <div className="mb-6">
            <label className="text-white/70 text-sm font-bold mb-2 block">Modelo Usado</label>
            <input
              type="text"
              value={selectedContrato.modeloUsado}
              onChange={e => setSelectedContrato({ ...selectedContrato, modeloUsado: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>

          <div className="flex gap-2 mt-auto">
            <button className="px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow hover:bg-blue-700 transition-all">Gerar PDF</button>
            <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all">Enviar para Assinatura</button>
          </div>
          
          {/* Estrutura para integração real-time futura (ex: useEffect para sync) */}
        </motion.div>
      )}
    </div>
  );
} 