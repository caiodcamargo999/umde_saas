"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const imoveis = [
  { nome: "Apto. Vila Mariana", tipo: "Apartamento", status: "Disponível", valor: "R$ 850.000", cidade: "São Paulo" },
  { nome: "Casa Jardim Europa", tipo: "Casa", status: "Em negociação", valor: "R$ 2.100.000", cidade: "São Paulo" },
  { nome: "Sala Comercial Centro", tipo: "Comercial", status: "Alugado", valor: "R$ 6.500/mês", cidade: "Belo Horizonte" },
  { nome: "Cobertura Praia", tipo: "Cobertura", status: "Disponível", valor: "R$ 1.800.000", cidade: "Florianópolis" },
];

type Imovel = typeof imoveis[number];

export default function ImoveisPage() {
  const [selectedImovel, setSelectedImovel] = useState<Imovel | null>(null);
  // Filtros dinâmicos
  const [filtroStatus, setFiltroStatus] = useState<string>("");
  const imoveisFiltrados = filtroStatus ? imoveis.filter(i => i.status === filtroStatus) : imoveis;
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white/90 tracking-tight">Imóveis</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar imóvel..."
            className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition w-full md:w-64"
          />
          <button className="px-5 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] ml-2">
            + Adicionar Imóvel
          </button>
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
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Valor</th>
              <th className="px-6 py-4">Cidade</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {imoveisFiltrados.map(item => (
              <tr key={item.nome} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition cursor-pointer" onClick={() => setSelectedImovel(item)}>
                <td className="px-6 py-4 font-semibold text-white/90">{item.nome}</td>
                <td className="px-6 py-4 text-white/70">{item.tipo}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'Disponível' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : item.status === 'Alugado' ? 'bg-green-600/30 text-green-400' : 'bg-yellow-600/20 text-yellow-300'}`}>{item.status}</span>
                </td>
                <td className="px-6 py-4 text-white/90">{item.valor}</td>
                <td className="px-6 py-4 text-white/70">{item.cidade}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 rounded-lg bg-[#0D4FF7]/80 text-white text-xs font-bold shadow hover:bg-[#0D4FF7] transition-all" onClick={e => {e.stopPropagation(); setSelectedImovel(item);}}>Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      {/* Painel lateral de detalhamento do imóvel */}
      {selectedImovel && (
        <motion.div
          className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border-l border-[#0D4FF7]/30 shadow-2xl z-50 flex flex-col p-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            className="absolute top-4 right-4 text-white/60 text-2xl font-bold hover:text-white transition"
            onClick={() => setSelectedImovel(null)}
            aria-label="Fechar"
          >×</button>
          {/* Edição inline */}
          <input
            className="text-2xl font-extrabold text-[#0D4FF7] mb-2 bg-transparent border-b border-[#0D4FF7]/40 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedImovel.nome}
            onChange={e => setSelectedImovel({ ...selectedImovel, nome: e.target.value })}
          />
          <input
            className="text-white/80 mb-4 bg-transparent border-b border-[#0D4FF7]/20 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedImovel.tipo}
            onChange={e => setSelectedImovel({ ...selectedImovel, tipo: e.target.value })}
          />
          <div className="flex gap-2 mb-4">
            <label className="text-white/70 text-sm">Filtrar status:</label>
            <select value={filtroStatus} onChange={e => setFiltroStatus(e.target.value)} className="bg-[#0D1A3A] border border-[#0D4FF7]/30 text-white rounded px-2 py-1">
              <option value="">Todos</option>
              <option value="Disponível">Disponível</option>
              <option value="Alugado">Alugado</option>
              <option value="Em negociação">Em negociação</option>
            </select>
          </div>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0D4FF7]/20 text-[#0D4FF7]">{selectedImovel.status}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white">{selectedImovel.valor}</span>
          </div>
          {/* Espaço para ações rápidas ou edição inline futuramente */}
          {/* Estrutura para integração real-time futura (ex: useEffect para sync) */}
        </motion.div>
      )}
    </div>
  );
} 