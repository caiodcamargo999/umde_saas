'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Tag, MessageSquare, Calendar, StickyNote, FilePlus } from 'lucide-react';
import type { Lead } from '../page';
import React, { useState } from 'react';
import SidePanel from '../../imoveis/components/SidePanel';

interface LeadDetailPanelProps {
  lead: Lead | null;
  onClose: () => void;
  onUpdateLead: (lead: Lead) => void;
}

export const LeadDetailPanel = ({ lead, onClose, onUpdateLead }: LeadDetailPanelProps) => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [docContent, setDocContent] = useState('');

  if (!lead) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 right-0 h-full w-full max-w-full md:max-w-md bg-[#0D1A3A] border-l border-blue-500/30 shadow-2xl z-50 flex flex-col overflow-x-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-4 md:p-6 border-b border-blue-500/20 flex justify-between items-center w-full">
          <h2 className="text-xl font-bold text-white">Detalhes do Lead</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
            <X className="w-6 h-6 text-white/70" />
          </button>
        </div>
        <div className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto w-full max-w-full overflow-x-hidden">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition-all mb-4 w-full justify-center"
            onClick={() => setSidePanelOpen(true)}
          >
            <FilePlus className="w-5 h-5" />
            Nova Página
          </button>
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
            <label className="text-sm text-white/50">Status</label>
            <div className="flex items-center gap-2 text-white/80">
              <Tag className="w-5 h-5" />
              <span>{lead.status}</span>
            </div>
          </div>
          <div>
            <label className="text-sm text-white/50">Origem</label>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-5 h-5" />
              <span>{lead.origem}</span>
            </div>
          </div>
          <div>
            <label className="text-sm text-white/50">Valor</label>
            <div className="flex items-center gap-2 text-white/80">
              <Tag className="w-5 h-5" />
              <span>{lead.valor}</span>
            </div>
          </div>
          <div>
            <label className="text-sm text-white/50">Etapa</label>
            <div className="flex items-center gap-2 text-white/80">
              <Tag className="w-5 h-5" />
              <span>{lead.etapa}</span>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 border-t border-blue-500/20 flex justify-around w-full">
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors" onClick={() => alert('Funcionalidade de contato será implementada!')}>
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Contato</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors" onClick={() => alert('Funcionalidade de agendamento será implementada!')}>
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Agendar</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors" onClick={() => alert('Funcionalidade de notas será implementada!')}>
            <StickyNote className="w-5 h-5" />
            <span className="text-xs">Nota</span>
          </button>
        </div>
        {/* SidePanel Notion-like para documentação */}
        <SidePanel open={sidePanelOpen} onClose={() => setSidePanelOpen(false)} title="Nova Página">
          <div className="flex flex-col gap-4 w-full">
            <textarea
              className="w-full min-h-[180px] rounded-lg bg-[#0D1A3A] border border-blue-500/20 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
              placeholder="Escreva sua documentação, notas ou use o botão abaixo para gerar com IA..."
              value={docContent}
              onChange={e => setDocContent(e.target.value)}
            />
            <button
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-all self-end"
              onClick={() => setDocContent('Exemplo de conteúdo gerado por IA para este lead. (Mock)')}
            >
              Gerar com IA
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700 transition-all self-end"
              onClick={() => setSidePanelOpen(false)}
            >
              Salvar Página
            </button>
          </div>
        </SidePanel>
      </motion.div>
    </AnimatePresence>
  );
};
