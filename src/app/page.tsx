import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0D1A3A] px-4">
      <section className="w-full max-w-3xl bg-[#101C3A]/80 rounded-2xl shadow-2xl p-8 md:p-16 flex flex-col items-center gap-8 mt-4 mb-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-black text-[#0D4FF7] mb-2 text-center drop-shadow-lg tracking-tight font-sans">
          O CRM Imobiliário Mais Inteligente do Brasil
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-white/80 mb-4 max-w-2xl text-center">
          Captação, qualificação e venda de imóveis com automações, WhatsApp e inteligência de dados — tudo em um só lugar.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <a
            href="/auth"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0D4FF7] text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 scale-100 hover:scale-105 active:scale-95"
            tabIndex={0}
          >
            Comece Grátis Agora
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#0D4FF7] text-[#0D4FF7] font-bold text-lg bg-[#0D1A3A] hover:bg-blue-900 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 scale-100 hover:scale-105 active:scale-95"
            tabIndex={0}
          >
            Assista à demonstração
          </a>
        </div>
      </section>
      <footer className="text-xs text-white/40 mt-auto mb-4 text-center w-full">
        &copy; {new Date().getFullYear()} UMDÊ SaaS CRM. Todos os direitos reservados.
      </footer>
    </main>
  );
}
