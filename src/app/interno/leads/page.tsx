const stages = ["Novo", "Qualificado", "Proposta", "Fechado", "Perdido"];
const leads = [
  { id: 1, nome: "João Silva", status: "Novo", contato: "(11) 99999-9999" },
  { id: 2, nome: "Maria Souza", status: "Qualificado", contato: "(21) 98888-8888" },
  { id: 3, nome: "Carlos Lima", status: "Proposta", contato: "(31) 97777-7777" },
  { id: 4, nome: "Ana Paula", status: "Fechado", contato: "(41) 96666-6666" },
  { id: 5, nome: "Pedro Santos", status: "Perdido", contato: "(51) 95555-5555" },
];

export default function LeadsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#0D1A3A] text-white px-2 py-8 animate-fade-in">
      <h1 className="text-3xl md:text-5xl font-black text-[#0D4FF7] mb-8 text-center font-sans">
        Funil de Leads
      </h1>
      <div className="w-full max-w-7xl overflow-x-auto">
        <div className="flex gap-4 min-w-[700px]">
          {stages.map(stage => (
            <div key={stage} className="flex-1 bg-[#101C3A] rounded-xl p-4 min-w-[180px] animate-fade-in">
              <h2 className="text-lg font-bold text-[#0D4FF7] mb-2 text-center">{stage}</h2>
              <div className="flex flex-col gap-3">
                {leads.filter(l => l.status === stage).map(lead => (
                  <div key={lead.id} className="bg-[#0D1A3A] rounded-lg p-3 shadow hover:scale-105 transition-transform duration-200 animate-fade-in">
                    <div className="font-semibold text-white">{lead.nome}</div>
                    <div className="text-xs text-white/60">{lead.contato}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 