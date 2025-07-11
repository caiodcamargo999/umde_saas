"use client";
import { motion } from "framer-motion";

const cards = [
  { titulo: "Leads Ativos", valor: 128, descricao: "Novos este mês" },
  { titulo: "Vendas Fechadas", valor: 32, descricao: "Últimos 30 dias" },
  { titulo: "Taxa de Conversão", valor: "24%", descricao: "Média geral" },
  { titulo: "Performance", valor: "A+", descricao: "Equipe pré-vendas" },
];

export default function DashboardPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-white/90 tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.titulo}
            className="rounded-2xl p-6 shadow-xl bg-gradient-to-br from-[#0D4FF7]/10 to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md flex flex-col items-start gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.7 }}
          >
            <span className="text-xs text-white/60 font-medium mb-1">{card.descricao}</span>
            <span className="text-3xl font-black text-[#0D4FF7] drop-shadow-lg">{card.valor}</span>
            <span className="text-base font-semibold text-white/90">{card.titulo}</span>
          </motion.div>
        ))}
      </div>
      {/* Placeholder para gráfico de barras */}
      <motion.div
        className="rounded-2xl bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md shadow-xl p-8 flex flex-col items-center justify-center min-h-[220px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <div className="w-full h-32 flex items-end gap-4">
          {[60, 80, 40, 100, 70, 90, 50].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div className="w-6 rounded-t-lg bg-[#0D4FF7]" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
        <span className="text-xs text-white/40 mt-4">Gráfico ilustrativo (placeholder)</span>
      </motion.div>
    </div>
  );
} 