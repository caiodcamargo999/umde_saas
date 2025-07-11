"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Leads Ativos",
    value: 128,
    subtitle: "Novos este mês",
    color: "from-[#0D4FF7] to-[#13235a]",
  },
  {
    title: "Vendas Fechadas",
    value: 32,
    subtitle: "Últimos 30 dias",
    color: "from-[#0D4FF7]/80 to-[#0D1A3A]",
  },
  {
    title: "Taxa de Conversão",
    value: "24%",
    subtitle: "Média geral",
    color: "from-[#0D4FF7]/60 to-[#0D1A3A]",
  },
  {
    title: "Performance",
    value: "A+",
    subtitle: "Equipe pré-vendas",
    color: "from-[#0D4FF7]/50 to-[#0D1A3A]",
  },
];

export default function DashboardPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-white/90 tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className={`rounded-2xl p-6 shadow-xl bg-gradient-to-br ${card.color} border border-[#0D4FF7]/20 backdrop-blur-md flex flex-col items-start gap-2`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.7 }}
          >
            <span className="text-xs text-white/60 font-medium mb-1">{card.subtitle}</span>
            <span className="text-3xl font-black text-[#0D4FF7] drop-shadow-lg">{card.value}</span>
            <span className="text-base font-semibold text-white/90">{card.title}</span>
          </motion.div>
        ))}
      </div>
      {/* Espaço para gráficos e outros cards futuros */}
    </div>
  );
} 