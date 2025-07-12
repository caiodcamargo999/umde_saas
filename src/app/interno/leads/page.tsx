'use client';
import { useState } from "react";
import { DropResult } from "@hello-pangea/dnd";
import { KanbanView } from "./components/KanbanView";
import { TableView } from "./components/TableView";
import { LeadDetailPanel } from "./components/LeadDetailPanel";
import { LeadsHeader } from "./components/LeadsHeader";

const etapas = ["Novo", "Qualificado", "Proposta", "Fechado"];

export type Lead = {
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeads = leads.filter(lead => 
    lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.origem.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leadsByEtapa = groupLeadsByEtapa(filteredLeads);

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceEtapa = source.droppableId;
    const destEtapa = destination.droppableId;

    const sourceLeads = Array.from(leadsByEtapa[sourceEtapa]);
    const [removed] = sourceLeads.splice(source.index, 1);
    removed.etapa = destEtapa;

    const destLeads = Array.from(leadsByEtapa[destEtapa]);
    destLeads.splice(destination.index, 0, removed);

    const newLeads = leads.map((l) =>
      l.id === removed.id ? { ...removed } : l
    );
    setLeads(newLeads);
  }

  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads(leads.map(l => l.id === updatedLead.id ? updatedLead : l));
    setSelectedLead(updatedLead);
  };

  const handleAddLead = () => {
    // Lógica para adicionar um novo lead (abrir modal, etc.)
    alert("Funcionalidade de adicionar lead será implementada!");
  };

  return (
    <div className="w-full px-2 md:px-8 xl:px-16">
      <LeadsHeader 
        view={view} 
        setView={setView} 
        onSearch={setSearchTerm} 
        onAddLead={handleAddLead} 
      />

      {view === 'tabela' ? (
        <TableView leads={filteredLeads} onLeadClick={setSelectedLead} />
      ) : (
        <KanbanView 
          leadsByEtapa={leadsByEtapa} 
          onDragEnd={onDragEnd} 
          onLeadClick={setSelectedLead} 
        />
      )}

      <LeadDetailPanel 
        lead={selectedLead} 
        onClose={() => setSelectedLead(null)} 
        onUpdateLead={handleUpdateLead}
      />
    </div>
  );
}