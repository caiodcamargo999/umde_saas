import React from "react";

const features = [
  {
    title: "Captação de leads via CNPJ",
    description: "Enriqueça automaticamente seus leads com dados oficiais e acelere a prospecção.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="text-[#0D4FF7]" aria-hidden="true"><rect x="8" y="8" width="24" height="24" rx="4" fill="#101C3A" stroke="#0D4FF7" strokeWidth="2"/><rect x="13" y="13" width="4" height="6" rx="1" fill="#0D4FF7"/><rect x="23" y="13" width="4" height="6" rx="1" fill="#0D4FF7"/><rect x="13" y="22" width="4" height="6" rx="1" fill="#0D4FF7"/><rect x="23" y="22" width="4" height="6" rx="1" fill="#0D4FF7"/></svg>
    ),
  },
  {
    title: "Pré-vendas com automação",
    description: "Automatize tarefas, atribua metas e monitore a performance da equipe em tempo real.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="text-[#0D4FF7]" aria-hidden="true"><polygon points="20,6 24,22 20,18 16,22" fill="#0D4FF7"/><rect x="18" y="24" width="4" height="10" rx="2" fill="#0D4FF7"/></svg>
    ),
  },
  {
    title: "WhatsApp integrado",
    description: "Centralize conversas, envie mensagens e acompanhe históricos diretamente no CRM.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="text-[#0D4FF7]" aria-hidden="true"><ellipse cx="20" cy="20" rx="16" ry="12" fill="#101C3A" stroke="#0D4FF7" strokeWidth="2"/><ellipse cx="20" cy="20" rx="10" ry="7" fill="#0D4FF7"/></svg>
    ),
  },
  {
    title: "Gestão de leads Canal Pro",
    description: "Importe e gerencie leads do Grupo OLX/Canal Pro com facilidade e integração total.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="text-[#0D4FF7]" aria-hidden="true"><rect x="10" y="18" width="20" height="4" rx="2" fill="#0D4FF7"/><circle cx="14" cy="20" r="4" fill="#101C3A" stroke="#0D4FF7" strokeWidth="2"/><circle cx="26" cy="20" r="4" fill="#101C3A" stroke="#0D4FF7" strokeWidth="2"/></svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col gap-8 animate-fade-in-delay-2">
      <h3 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 tracking-tight">
        Destaques da Plataforma
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="flex items-center gap-6 bg-[#101C3A]/80 rounded-xl shadow-lg p-6 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 border border-[#0D4FF7]/10 animate-slide-in-up"
            style={{ animationDelay: `${0.1 * idx + 0.2}s` }}
          >
            <span className="flex-shrink-0">{feature.icon}</span>
            <div>
              <h4 className="text-lg md:text-2xl font-bold text-[#0D4FF7] mb-1">
                {feature.title}
              </h4>
              <p className="text-white/80 text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 