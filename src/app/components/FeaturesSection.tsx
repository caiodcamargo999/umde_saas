import { Briefcase, Target, MessageSquare, Filter } from 'lucide-react';

const features = [
  {
    title: "Captação de leads via CNPJ",
    description: "Enriqueça automaticamente seus leads com dados oficiais e acelere a prospecção.",
    icon: <Briefcase size={32} className="text-[#0D4FF7]" />,
  },
  {
    title: "Pré-vendas com automação",
    description: "Automatize tarefas, atribua metas e monitore a performance da equipe em tempo real.",
    icon: <Target size={32} className="text-[#0D4FF7]" />,
  },
  {
    title: "WhatsApp integrado",
    description: "Centralize conversas, envie mensagens e acompanhe históricos diretamente no CRM.",
    icon: <MessageSquare size={32} className="text-[#0D4FF7]" />,
  },
  {
    title: "Gestão de leads Canal Pro",
    description: "Importe e gerencie leads do Grupo OLX/Canal Pro com facilidade e integração total.",
    icon: <Filter size={32} className="text-[#0D4FF7]" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold text-[#0D4FF7] tracking-wider uppercase">Funcionalidades</h2>
        <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Tudo que você precisa para vender mais
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-white/70">
          Nossa plataforma foi desenhada para otimizar cada etapa do seu processo de vendas, da prospecção ao fechamento.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative p-8 bg-gradient-to-br from-[#101C3A] to-[#0D1A3A] rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 border border-blue-500/20 overflow-hidden"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}