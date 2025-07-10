export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#0D1A3A] text-white px-4 py-8 animate-fade-in">
      <h1 className="text-3xl md:text-5xl font-black text-[#0D4FF7] mb-8 text-center font-sans">
        Dashboard
      </h1>
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Leads', value: 128, color: 'bg-[#0D4FF7]' },
          { label: 'Imóveis', value: 42, color: 'bg-[#101C3A]' },
          { label: 'Agentes', value: 8, color: 'bg-[#0D4FF7]' },
          { label: 'Investidores', value: 15, color: 'bg-[#101C3A]' },
          { label: 'Contratos', value: 23, color: 'bg-[#0D4FF7]' },
          { label: 'Performance', value: '98%', color: 'bg-[#101C3A]' },
        ].map((card, i) => (
          <div key={card.label} className={`rounded-2xl shadow-xl p-6 flex flex-col items-center gap-2 ${card.color} hover:scale-105 transition-transform duration-200 animate-fade-in`}> 
            <span className="text-2xl font-bold text-white/90">{card.value}</span>
            <span className="text-white/60 text-sm font-semibold">{card.label}</span>
          </div>
        ))}
      </section>
      <section className="w-full max-w-5xl flex flex-wrap gap-4 justify-center">
        {[
          { label: 'Ver Funil de Leads', href: '/interno/leads' },
          { label: 'Gerenciar Imóveis', href: '/interno/imoveis' },
          { label: 'Equipe de Agentes', href: '/interno/agentes' },
          { label: 'Painel de Performance', href: '/interno/performance' },
        ].map(link => (
          <a key={link.href} href={link.href} className="px-6 py-3 rounded-full bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 scale-100 hover:scale-105 active:scale-95 animate-fade-in">
            {link.label}
          </a>
        ))}
      </section>
    </main>
  );
} 