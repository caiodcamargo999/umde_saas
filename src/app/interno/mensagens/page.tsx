"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const conversas = [
  { nome: "João Silva", canal: "WhatsApp", ultima: "Olá, tudo bem?", status: "Novo", hora: "09:12" },
  { nome: "Maria Souza", canal: "Email", ultima: "Enviei os documentos.", status: "Respondido", hora: "Ontem" },
  { nome: "Carlos Lima", canal: "Canal Pro", ultima: "Proposta recebida.", status: "Novo", hora: "08:45" },
  { nome: "Ana Paula", canal: "WhatsApp", ultima: "Aguardo retorno.", status: "Pendente", hora: "07:30" },
];

type Conversa = typeof conversas[number];

export default function MensagensPage() {
  const [selectedConversa, setSelectedConversa] = useState<Conversa | null>(conversas[0]);
  // Filtros dinâmicos
  const [filtroCanal, setFiltroCanal] = useState<string>("");
  const conversasFiltradas = filtroCanal ? conversas.filter(c => c.canal === filtroCanal) : conversas;
  return (
    <div className="w-full max-w-6xl mx-auto py-6 h-[70vh] flex gap-6">
      {/* Lista de conversas */}
      <motion.div
        className="w-80 min-w-[220px] h-full rounded-2xl shadow-xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md flex flex-col"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="p-4 border-b border-[#0D4FF7]/10">
          <input
            type="text"
            placeholder="Buscar conversa..."
            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversas.map((c) => (
            <div
              key={c.nome}
              className={`px-4 py-3 border-b border-white/5 hover:bg-[#0D4FF7]/10 cursor-pointer transition flex flex-col gap-1 ${selectedConversa?.nome === c.nome ? 'bg-[#0D4FF7]/10' : ''}`}
              onClick={() => setSelectedConversa(c)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-white/90 text-sm truncate">{c.nome}</span>
                <span className="text-xs text-white/40 ml-2">{c.hora}</span>
              </div>
              <span className="text-xs text-white/60 truncate">{c.ultima}</span>
              <span className={`text-[10px] font-bold mt-1 ${c.status === 'Novo' ? 'text-[#0D4FF7]' : c.status === 'Pendente' ? 'text-yellow-300' : 'text-white/40'}`}>{c.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Painel lateral de detalhamento da conversa */}
      {selectedConversa && (
        <motion.div
          className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border-l border-[#0D4FF7]/30 shadow-2xl z-50 flex flex-col p-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            className="absolute top-4 right-4 text-white/60 text-2xl font-bold hover:text-white transition"
            onClick={() => setSelectedConversa(null)}
            aria-label="Fechar"
          >×</button>
          {/* Edição inline */}
          <input
            className="font-bold text-white/90 text-lg bg-transparent border-b border-[#0D4FF7]/40 focus:outline-none focus:border-[#0D4FF7] transition mb-2"
            value={selectedConversa.nome}
            onChange={e => setSelectedConversa({ ...selectedConversa, nome: e.target.value })}
          />
          <input
            className="text-xs text-[#0D4FF7] bg-[#0D4FF7]/10 rounded px-2 py-1 font-bold mb-4 border-b border-[#0D4FF7]/20 focus:outline-none focus:border-[#0D4FF7] transition"
            value={selectedConversa.canal}
            onChange={e => setSelectedConversa({ ...selectedConversa, canal: e.target.value })}
          />
          {/* Filtros dinâmicos */}
          <div className="flex gap-2 mb-4">
            <label className="text-white/70 text-sm">Filtrar canal:</label>
            <select value={filtroCanal} onChange={e => setFiltroCanal(e.target.value)} className="bg-[#0D1A3A] border border-[#0D4FF7]/30 text-white rounded px-2 py-1">
              <option value="">Todos</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
              <option value="Canal Pro">Canal Pro</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col justify-end p-6 gap-2 overflow-y-auto">
            {conversasFiltradas.map((c) => (
              <div
                key={c.nome}
                className={`px-4 py-3 border-b border-white/5 hover:bg-[#0D4FF7]/10 cursor-pointer transition flex flex-col gap-1 ${selectedConversa?.nome === c.nome ? 'bg-[#0D4FF7]/10' : ''}`}
                onClick={() => setSelectedConversa(c)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white/90 text-sm truncate">{c.nome}</span>
                  <span className="text-xs text-white/40 ml-2">{c.hora}</span>
                </div>
                <span className="text-xs text-white/60 truncate">{c.ultima}</span>
                <span className={`text-[10px] font-bold mt-1 ${c.status === 'Novo' ? 'text-[#0D4FF7]' : c.status === 'Pendente' ? 'text-yellow-300' : 'text-white/40'}`}>{c.status}</span>
              </div>
            ))}
            <div className="self-start bg-white/10 text-white px-4 py-2 rounded-2xl max-w-[70%] shadow">{selectedConversa.ultima}</div>
            <div className="self-end bg-[#0D4FF7] text-white px-4 py-2 rounded-2xl max-w-[70%] shadow">Tudo ótimo! Como posso ajudar?</div>
          </div>
          <div className="p-4 border-t border-[#0D4FF7]/10 flex gap-2">
            <input
              type="text"
              placeholder="Digite uma mensagem..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
            />
            <button className="px-5 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7]">
              Enviar
            </button>
          </div>
          {/* Estrutura para integração real-time futura (ex: useEffect para sync) */}
        </motion.div>
      )}
    </div>
  );
} 