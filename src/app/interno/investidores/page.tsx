"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const investidores = [
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

type Investidor = typeof investidores[number];

export default function InvestidoresPage() {
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
    console.log("Criando investidor:", newInvestidor);
    setShowCreateModal(false);
    setNewInvestidor({ nome: "", email: "", tipo: "Real Estate", objetivos: [], procura: "", faixaValor: "", regioes: [] });
  };

  const objetivosDisponiveis = ["Renda", "Flip", "Aluguel", "Parceria", "Desenvolvimento"];

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white/90 tracking-tight">Investidores</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            className="px-5 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7]"
            onClick={() => setShowCreateModal(true)}
          >
            + Adicionar Investidor
          </button>
        </div>
      </div>

      {/* Filtros Avançados */}
      <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-white/70 text-sm mb-1 block">Buscar por nome/email</label>
            <input
              type="text"
              placeholder="Digite para buscar..."
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>
          
          <div>
            <label className="text-white/70 text-sm mb-1 block">Status</label>
            <div className="flex gap-2">
              {["Ativo", "Inativo"].map(status => (
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
              {["Real Estate", "Business"].map(tipo => (
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
            <label className="text-white/70 text-sm mb-1 block">Objetivos</label>
            <div className="flex flex-wrap gap-2">
              {objetivosDisponiveis.map(objetivo => (
                <label key={objetivo} className="flex items-center gap-2 text-white/70 text-sm">
                  <input
                    type="checkbox"
                    checked={filtroObjetivos.includes(objetivo)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFiltroObjetivos([...filtroObjetivos, objetivo]);
                      } else {
                        setFiltroObjetivos(filtroObjetivos.filter(o => o !== objetivo));
                      }
                    }}
                    className="rounded border-[#0D4FF7]/30 bg-[#0D1A3A]"
                  />
                  {objetivo}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-white/70 text-sm mb-1 block">Investimentos (mín)</label>
            <input
              type="number"
              placeholder="0"
              value={filtroInvestimentosMin}
              onChange={(e) => setFiltroInvestimentosMin(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm mb-1 block">Investimentos (máx)</label>
            <input
              type="number"
              placeholder="10"
              value={filtroInvestimentosMax}
              onChange={(e) => setFiltroInvestimentosMax(e.target.value)}
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

      <motion.div
        className="overflow-x-auto rounded-2xl shadow-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-[#0D4FF7] text-sm font-bold">
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Objetivos</th>
              <th className="px-6 py-4">Investimentos</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {investidoresFiltrados.map(investidor => (
              <tr key={investidor.id} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition cursor-pointer" onClick={() => setSelectedInvestidor(investidor)}>
                <td className="px-6 py-4 font-semibold text-white/90">{investidor.nome}</td>
                <td className="px-6 py-4 text-white/70">{investidor.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${investidor.tipo === 'Real Estate' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-green-600/30 text-green-400'}`}>{investidor.tipo}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${investidor.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-red-600/30 text-red-400'}`}>{investidor.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {investidor.objetivos.map(objetivo => (
                      <span key={objetivo} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-white">{objetivo}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-white/90">{investidor.investimentos}</td>
                <td className="px-6 py-4 text-white/70">{investidor.total}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 rounded-lg bg-[#0D4FF7]/80 text-white text-xs font-bold shadow hover:bg-[#0D4FF7] transition-all" onClick={e => {e.stopPropagation(); setSelectedInvestidor(investidor);}}>Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Modal de Criação de Investidor */}
      {showCreateModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/30 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0D4FF7]">Adicionar Investidor</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-white/60 text-2xl font-bold hover:text-white transition"
              >×</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Nome</label>
                <input
                  type="text"
                  value={newInvestidor.nome}
                  onChange={(e) => setNewInvestidor({...newInvestidor, nome: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                  placeholder="Nome do investidor"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Email</label>
                <input
                  type="email"
                  value={newInvestidor.email}
                  onChange={(e) => setNewInvestidor({...newInvestidor, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Tipo de Investidor</label>
                <select
                  value={newInvestidor.tipo}
                  onChange={(e) => setNewInvestidor({...newInvestidor, tipo: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                >
                  <option value="Real Estate">Real Estate</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Objetivos</label>
                <div className="flex flex-wrap gap-2">
                  {objetivosDisponiveis.map(objetivo => (
                    <label key={objetivo} className="flex items-center gap-2 text-white/70 text-sm">
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
                        className="rounded border-[#0D4FF7]/30 bg-[#0D1A3A]"
                      />
                      {objetivo}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">O que procura</label>
                <textarea
                  value={newInvestidor.procura}
                  onChange={(e) => setNewInvestidor({...newInvestidor, procura: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none"
                  rows={3}
                  placeholder="Descreva o que este investidor procura (tipos de imóveis, regiões, características, etc.)"
                />
              </div>

              <div>
                <label className="text-white/80 text-sm font-bold mb-2 block">Faixa de Valor</label>
                <input
                  type="text"
                  value={newInvestidor.faixaValor}
                  onChange={(e) => setNewInvestidor({...newInvestidor, faixaValor: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
                  placeholder="Ex: R$ 500K - R$ 2M"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleCreateInvestidor}
                  className="flex-1 px-6 py-3 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all"
                >
                  Adicionar Investidor
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

      {/* Painel lateral de detalhamento do investidor */}
      {selectedInvestidor && (
        <motion.div
          className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border-l border-[#0D4FF7]/30 shadow-2xl z-50 flex flex-col p-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            className="absolute top-4 right-4 text-white/60 text-2xl font-bold hover:text-white transition"
            onClick={() => setSelectedInvestidor(null)}
            aria-label="Fechar"
          >×</button>
          
          {/* Edição inline */}
          <input
            className="text-2xl font-extrabold text-[#0D4FF7] mb-2 bg-transparent border-b border-[#0D4FF7]/40 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedInvestidor.nome}
            onChange={e => setSelectedInvestidor({ ...selectedInvestidor, nome: e.target.value })}
          />
          <input
            className="text-white/80 mb-4 bg-transparent border-b border-[#0D4FF7]/20 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedInvestidor.email}
            onChange={e => setSelectedInvestidor({ ...selectedInvestidor, email: e.target.value })}
          />
          
          <div className="flex gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedInvestidor.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-red-600/30 text-red-400'}`}>{selectedInvestidor.status}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedInvestidor.tipo === 'Real Estate' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-green-600/30 text-green-400'}`}>{selectedInvestidor.tipo}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">Investimentos: {selectedInvestidor.investimentos}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">Total: {selectedInvestidor.total}</span>
          </div>

          <div className="mb-4">
            <label className="text-white/70 text-sm font-bold mb-2 block">Objetivos</label>
            <div className="flex flex-wrap gap-2">
              {objetivosDisponiveis.map(objetivo => (
                <label key={objetivo} className="flex items-center gap-2 text-white/70 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedInvestidor.objetivos.includes(objetivo)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedInvestidor({...selectedInvestidor, objetivos: [...selectedInvestidor.objetivos, objetivo]});
                      } else {
                        setSelectedInvestidor({...selectedInvestidor, objetivos: selectedInvestidor.objetivos.filter(o => o !== objetivo)});
                      }
                    }}
                    className="rounded border-[#0D4FF7]/30 bg-[#0D1A3A]"
                  />
                  {objetivo}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="text-white/70 text-sm font-bold mb-2 block">O que procura</label>
            <textarea
              value={selectedInvestidor.procura}
              onChange={e => setSelectedInvestidor({ ...selectedInvestidor, procura: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition resize-none"
              rows={3}
            />
          </div>

          <div className="mb-6">
            <label className="text-white/70 text-sm font-bold mb-2 block">Faixa de Valor</label>
            <input
              type="text"
              value={selectedInvestidor.faixaValor}
              onChange={e => setSelectedInvestidor({ ...selectedInvestidor, faixaValor: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
          </div>

          <div className="flex gap-2 mt-auto">
            <button className="px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow hover:bg-blue-700 transition-all">Agrupar em Deal</button>
            <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all">Editar Perfil</button>
          </div>
          
          {/* Estrutura para integração real-time futura (ex: useEffect para sync) */}
        </motion.div>
      )}
    </div>
  );
} 