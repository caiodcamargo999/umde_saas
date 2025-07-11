import React from "react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#0D4FF7] py-16 px-4 flex flex-col items-center justify-center animate-fade-in-delay-5 relative overflow-hidden">
      <div className="absolute inset-0 border-4 border-[#0D4FF7] rounded-3xl animate-border-glow pointer-events-none" />
      <h3 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-6 tracking-tight z-10">
        Pronto para transformar sua gestão de vendas?
      </h3>
      <a
        href="/auth"
        className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-[#0D4FF7] font-black text-xl shadow-xl hover:bg-blue-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white scale-100 hover:scale-105 active:scale-95 animate-glow z-10"
        tabIndex={0}
      >
        Criar Conta Gratuita
      </a>
    </section>
  );
} 