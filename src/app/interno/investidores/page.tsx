"use client";
import { motion } from "framer-motion";

const investidores = [
  { nome: "Bruno Torres", email: "bruno@umde.com", status: "Ativo", investimentos: 3, total: "R$ 2.500.000" },
  { nome: "Patrícia Lima", email: "patricia@umde.com", status: "Ativo", investimentos: 1, total: "R$ 900.000" },
  { nome: "Eduardo Silva", email: "eduardo@umde.com", status: "Inativo", investimentos: 0, total: "-" },
  { nome: "Marina Souza", email: "marina@umde.com", status: "Ativo", investimentos: 2, total: "R$ 1.200.000" },
];

export default function InvestidoresPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white/90 tracking-tight">Investidores</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar investidor..."
            className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition w-full md:w-64"
          />
          <button className="px-5 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] ml-2">
            + Adicionar Investidor
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
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Investimentos</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {investidores.map((investidor, i) => (
              <tr key={investidor.nome} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition">
                <td className="px-6 py-4 font-semibold text-white/90">{investidor.nome}</td>
                <td className="px-6 py-4 text-white/70">{investidor.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${investidor.status === 'Ativo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-red-600/30 text-red-400'}`}>{investidor.status}</span>
                </td>
                <td className="px-6 py-4 text-white/90">{investidor.investimentos}</td>
                <td className="px-6 py-4 text-white/70">{investidor.total}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 rounded-lg bg-[#0D4FF7]/80 text-white text-xs font-bold shadow hover:bg-[#0D4FF7] transition-all">Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
} 