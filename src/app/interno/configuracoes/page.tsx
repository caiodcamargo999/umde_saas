"use client";
import { motion } from "framer-motion";

const cards = [
  { titulo: "Dados da Conta", descricao: "Gerencie suas informações pessoais e de acesso." },
  { titulo: "Preferências", descricao: "Ajuste preferências de notificações, idioma e tema." },
  { titulo: "Integrações", descricao: "Conecte APIs externas como WhatsApp, Assertiva, Canal Pro." },
  { titulo: "Segurança", descricao: "Altere senha, autenticação em duas etapas e permissões." },
];

export default function ConfiguracoesPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-white/90 tracking-tight">Configurações</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.titulo}
            className="rounded-2xl p-6 shadow-xl bg-gradient-to-br from-[#0D4FF7]/10 to-[#0D1A3A] border border-[#0D4FF7]/20 backdrop-blur-md flex flex-col gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.7 }}
          >
            <span className="text-lg font-bold text-[#0D4FF7] mb-2">{card.titulo}</span>
            <span className="text-white/80 text-sm">{card.descricao}</span>
            <button className="mt-4 px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] w-max">Gerenciar</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 