import React from "react";

const carouselItems = [
  { src: "#", alt: "Kanban de Leads" },
  { src: "#", alt: "Dashboard de Performance" },
  { src: "#", alt: "Central de Mensagens" },
];

export default function CarouselSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 animate-fade-in-delay-3">
      <h3 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 tracking-tight">
        Demonstração Visual
      </h3>
      <div className="relative w-full flex items-center justify-center overflow-x-auto gap-8">
        {/* Carrossel simples, pode ser substituído por lib de carousel futuramente */}
        <div className="flex gap-8 w-full justify-center">
          {carouselItems.map((item, idx) => (
            <div
              key={item.alt}
              className="w-[260px] h-[160px] md:w-[360px] md:h-[220px] bg-[#101C3A]/80 rounded-2xl shadow-xl border border-[#0D4FF7]/20 flex items-center justify-center text-white/30 text-lg font-bold select-none animate-slide-in-up"
              style={{ animationDelay: `${0.1 * idx + 0.2}s` }}
            >
              {item.alt}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 