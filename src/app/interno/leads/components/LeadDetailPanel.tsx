'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Calendar, StickyNote, Mail } from 'lucide-react';
import type { Lead } from '../page';

interface LeadDetailPanelProps {
  lead: Lead | null;
  onClose: () => void;
  onUpdateLead: (lead: Lead) => void;
}

export const LeadDetailPanel = ({ lead, onClose, onUpdateLead }: LeadDetailPanelProps) => {
  if (!lead) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0D1A3A] border-l border-blue-500/30 shadow-2xl z-50 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 border-b border-blue-500/20 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Detalhes do Lead</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>
        
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          <div>
            <label className="text-sm text-white/50">Nome</label>
            <input
              type="text"
              value={lead.nome}
              onChange={(e) => onUpdateLead({ ...lead, nome: e.target.value })}
              className="w-full bg-transparent text-lg text-white font-semibold border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-white/50">Email</label>
            <input
              type="email"
              value={lead.email}
              onChange={(e) => onUpdateLead({ ...lead, email: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label className="text-sm text-white/50">Telefone</label>
            <input
              type="tel"
              value={lead.telefone}
              onChange={(e) => onUpdateLead({ ...lead, telefone: e.target.value })}
              className="w-full bg-transparent text-base text-white/80 border-b border-transparent hover:border-blue-500/50 focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-2">Histórico</h3>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-2">
              {lead.historico.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="p-6 border-t border-blue-500/20 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Agendar</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <StickyNote className="w-5 h-5" />
            <span className="text-xs">Nota</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="text-xs">Email</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
