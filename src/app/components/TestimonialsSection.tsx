import React from "react";

const testimonials = [
  {
    name: "João Silva",
    role: "Corretor de Imóveis",
    text: "O UMDÊ revolucionou minha rotina. Capto e converto leads muito mais rápido!",
  },
  {
    name: "Maria Oliveira",
    role: "Gestora de Vendas",
    text: "A automação e integração com WhatsApp são diferenciais absurdos. Recomendo!",
  },
  {
    name: "Carlos Souza",
    role: "Investidor",
    text: "Nunca tive tanto controle e visibilidade sobre meus imóveis e negociações.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#0D1A3A] py-16 px-4 animate-fade-in-delay-4">
      <h3 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 tracking-tight">
        Depoimentos
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className="bg-[#101C3A]/80 rounded-xl shadow-lg p-6 flex flex-col items-center border border-[#0D4FF7]/10 animate-slide-in-up"
            style={{ animationDelay: `${0.1 * idx + 0.2}s` }}
          >
            <p className="text-white/90 text-lg mb-4 text-center">“{t.text}”</p>
            <span className="text-[#0D4FF7] font-bold text-base">{t.name}</span>
            <span className="text-white/60 text-sm">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 