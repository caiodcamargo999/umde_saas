'use client';
import { PlusCircle, Building, FileText } from 'lucide-react';

const actions = [
  {
    title: "Novo Lead",
    description: "Cadastrar um novo lead manualmente.",
    icon: <PlusCircle className="w-6 h-6 text-blue-400" />,
    href: "/interno/leads/novo"
  },
  {
    title: "Novo Imóvel",
    description: "Adicionar um novo imóvel à sua carteira.",
    icon: <Building className="w-6 h-6 text-green-400" />,
    href: "/interno/imoveis/novo"
  },
  {
    title: "Novo Contrato",
    description: "Gerar um novo contrato de venda ou aluguel.",
    icon: <FileText className="w-6 h-6 text-orange-400" />,
    href: "/interno/contratos/novo"
  },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((action) => (
        <a 
          key={action.title} 
          href={action.href}
          className="bg-[#101C3A]/50 p-6 rounded-2xl border border-blue-500/20 flex items-center gap-4 transition-all hover:bg-[#101C3A]/80 hover:border-blue-500/40"
        >
          <div className="bg-gray-800 p-3 rounded-full">
            {action.icon}
          </div>
          <div>
            <h3 className="font-semibold text-white">{action.title}</h3>
            <p className="text-sm text-white/70">{action.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
