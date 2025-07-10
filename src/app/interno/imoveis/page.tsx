const imoveis = [
  { id: 1, nome: "Apto Vila Madalena", status: "Disponível", tipo: "Apartamento", local: "SP" },
  { id: 2, nome: "Casa Alphaville", status: "Alugado", tipo: "Casa", local: "Barueri" },
  { id: 3, nome: "Studio Centro", status: "Disponível", tipo: "Studio", local: "RJ" },
];

export default function ImoveisPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#0D1A3A] text-white px-2 py-8 animate-fade-in">
      <h1 className="text-3xl md:text-5xl font-black text-[#0D4FF7] mb-8 text-center font-sans">
        Gestão de Imóveis
      </h1>
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input className="flex-1 rounded-lg px-4 py-2 bg-[#101C3A] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7]" placeholder="Buscar imóvel..." />
        <button className="px-6 py-2 rounded-full bg-[#0D4FF7] text-white font-bold shadow-lg hover:bg-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in">
          + Adicionar Imóvel
        </button>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {imoveis.map(imovel => (
          <div key={imovel.id} className="bg-[#101C3A] rounded-2xl shadow-xl p-6 flex flex-col gap-2 hover:scale-105 transition-transform duration-200 animate-fade-in">
            <span className="text-lg font-bold text-white/90">{imovel.nome}</span>
            <span className="text-white/60 text-sm">{imovel.tipo} - {imovel.local}</span>
            <span className={`text-xs font-semibold ${imovel.status === 'Disponível' ? 'text-green-400' : 'text-yellow-400'}`}>{imovel.status}</span>
          </div>
        ))}
      </div>
    </main>
  );
} 