"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

const etapas = ["Novo", "Qualificado", "Proposta", "Fechado"];

type Lead = {
  id: string;
  nome: string;
  status: string;
  origem: string;
  valor: string;
  etapa: string;
  email: string;
  telefone: string;
  historico: string[];
};

const initialLeads: Lead[] = [
  { id: "1", nome: "João Silva", status: "Novo", origem: "Site", valor: "R$ 500.000", etapa: "Novo", email: "joao@email.com", telefone: "(11) 99999-9999", historico: ["Lead criado", "Contato inicial"] },
  { id: "2", nome: "Maria Souza", status: "Qualificado", origem: "WhatsApp", valor: "R$ 320.000", etapa: "Qualificado", email: "maria@email.com", telefone: "(21) 98888-8888", historico: ["Lead criado", "Qualificação"] },
  { id: "3", nome: "Carlos Lima", status: "Fechado", origem: "Indicação", valor: "R$ 1.200.000", etapa: "Fechado", email: "carlos@email.com", telefone: "(31) 97777-7777", historico: ["Lead criado", "Proposta enviada", "Fechado"] },
  { id: "4", nome: "Ana Paula", status: "Proposta", origem: "Canal Pro", valor: "R$ 800.000", etapa: "Proposta", email: "ana@email.com", telefone: "(41) 96666-6666", historico: ["Lead criado", "Proposta enviada"] },
];

function groupLeadsByEtapa(leads: Lead[]): Record<string, Lead[]> {
  return etapas.reduce((acc, etapa) => {
    acc[etapa] = leads.filter((l) => l.etapa === etapa);
    return acc;
  }, {} as Record<string, Lead[]>);
}

export default function LeadsPage() {
  const [view, setView] = useState<'kanban' | 'tabela'>("kanban");
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const leadsByEtapa = groupLeadsByEtapa(leads);

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    const sourceEtapa = source.droppableId;
    const destEtapa = destination.droppableId;
    const sourceLeads = Array.from(leadsByEtapa[sourceEtapa]);
    const [removed] = sourceLeads.splice(source.index, 1);
    removed.etapa = destEtapa;
    // Remove do source e adiciona no destino
    const destLeads = Array.from(leadsByEtapa[destEtapa]);
    destLeads.splice(destination.index, 0, removed);
    // Atualiza leads
    const newLeads = leads.map((l) =>
      l.id === removed.id ? { ...removed } : l
    );
    setLeads(newLeads);
  }

  // Filtros dinâmicos
  const [filtroEtapa, setFiltroEtapa] = useState<string>("");
  const leadsFiltrados = filtroEtapa ? leads.filter(l => l.etapa === filtroEtapa) : leads;

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white/90 tracking-tight">Leads</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar lead..."
            className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition w-full md:w-64"
          />
          <button className="px-5 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] ml-2">
            + Adicionar Lead
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-bold ml-2 ${view === 'kanban' ? 'bg-[#0D4FF7] text-white' : 'bg-white/10 text-white/60'} transition`}
            onClick={() => setView('kanban')}
          >Kanban</button>
          <button
            className={`px-4 py-2 rounded-lg font-bold ${view === 'tabela' ? 'bg-[#0D4FF7] text-white' : 'bg-white/10 text-white/60'} transition`}
            onClick={() => setView('tabela')}
          >Tabela</button>
        </div>
      </div>
      {view === 'tabela' ? (
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
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Origem</th>
                <th className="px-6 py-4">Valor</th>
                <th className="px-6 py-4">Etapa</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {leadsFiltrados.map((lead) => (
                <tr key={lead.id} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition">
                  <td className="px-6 py-4 font-semibold text-white/90">{lead.nome}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${lead.status === 'Fechado' ? 'bg-green-600/30 text-green-400' : lead.status === 'Novo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-yellow-600/20 text-yellow-300'}`}>{lead.status}</span>
                  </td>
                  <td className="px-6 py-4 text-white/70">{lead.origem}</td>
                  <td className="px-6 py-4 text-white/90">{lead.valor}</td>
                  <td className="px-6 py-4 text-white/70">{lead.etapa}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1 rounded-lg bg-[#0D4FF7]/80 text-white text-xs font-bold shadow hover:bg-[#0D4FF7] transition-all" onClick={() => setSelectedLead(lead)}>Ver detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <motion.div
            className="flex gap-4 overflow-x-auto pb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {etapas.map((etapa) => (
              <Droppable droppableId={etapa} key={etapa}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 min-w-[220px] bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border border-[#0D4FF7]/20 rounded-2xl shadow-xl backdrop-blur-md p-4 flex flex-col gap-4 ${snapshot.isDraggingOver ? 'ring-2 ring-[#0D4FF7]' : ''}`}
                  >
                    <div className="font-bold text-[#0D4FF7] text-lg mb-2">{etapa}</div>
                    <div className="flex flex-col gap-3">
                      {leadsByEtapa[etapa].map((lead, i) => (
                        <Draggable draggableId={lead.id} index={i} key={lead.id}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`rounded-xl bg-[#0D1A3A]/80 border border-[#0D4FF7]/10 p-4 shadow flex flex-col gap-1 hover:scale-[1.03] transition-transform cursor-pointer ${snapshot.isDragging ? 'ring-2 ring-[#0D4FF7]' : ''}`}
                              onClick={() => setSelectedLead(lead)}
                            >
                              <div className="font-semibold text-white/90 text-sm">{lead.nome}</div>
                              <div className="text-xs text-white/60">{lead.origem} • {lead.valor}</div>
                              <div className="flex gap-2 mt-1">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${lead.status === 'Fechado' ? 'bg-green-600/30 text-green-400' : lead.status === 'Novo' ? 'bg-[#0D4FF7]/20 text-[#0D4FF7]' : 'bg-yellow-600/20 text-yellow-300'}`}>{lead.status}</span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </motion.div>
        </DragDropContext>
      )}
      {/* Painel lateral de detalhamento do lead */}
      <AnimatePresence>
        {selectedLead && (
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] border-l border-[#0D4FF7]/30 shadow-2xl z-50 flex flex-col p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-4 right-4 text-white/60 text-2xl font-bold hover:text-white transition"
              onClick={() => setSelectedLead(null)}
              aria-label="Fechar"
            >×</button>
            {/* Edição inline */}
            <input
              className="text-2xl font-extrabold text-[#0D4FF7] mb-2 bg-transparent border-b border-[#0D4FF7]/40 focus:outline-none focus:border-[#0D4FF7] transition"
              value={selectedLead.nome}
              onChange={e => setSelectedLead({ ...selectedLead, nome: e.target.value })}
            />
            <input
              className="text-white/80 mb-4 bg-transparent border-b border-[#0D4FF7]/20 focus:outline-none focus:border-[#0D4FF7] transition"
              value={selectedLead.email}
              onChange={e => setSelectedLead({ ...selectedLead, email: e.target.value })}
            />
            <div className="flex gap-2 mb-4">
              <label className="text-white/70 text-sm">Filtrar etapa:</label>
              <select value={filtroEtapa} onChange={e => setFiltroEtapa(e.target.value)} className="bg-[#0D1A3A] border border-[#0D4FF7]/30 text-white rounded px-2 py-1">
                <option value="">Todas</option>
                {etapas.map(etapa => <option key={etapa} value={etapa}>{etapa}</option>)}
              </select>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white/80 mb-2">Histórico</h3>
              <ul className="text-white/60 text-sm list-disc pl-5">
                {selectedLead.historico.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow hover:bg-blue-700 transition-all">WhatsApp</button>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all">Agendar</button>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all">Nota</button>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all">Email</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 