'use client';
import { useState } from "react";
import { MetricCard } from "./components/MetricCard";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";
import { RecentActivity } from "./components/RecentActivity";
import { QuickActions } from "./components/QuickActions";
import { Users, BarChart2, DollarSign, Building } from 'lucide-react';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Dados simulados
  const leadsData = [
    { label: "Novos", value: 45 },
    { label: "Qualificados", value: 32 },
    { label: "Proposta", value: 18 },
    { label: "Fechados", value: 12 }
  ];

  const leadsBySource = [
    { name: "WhatsApp", value: 35, color: "#25D366" },
    { name: "Canal Pro", value: 28, color: "#0D4FF7" },
    { name: "Website", value: 22, color: "#FF6B35" },
    { name: "Indicação", value: 15, color: "#8B5CF6" }
  ];

  const recentActivities = [
    { id: 1, type: "lead", message: "Novo lead qualificado: João Silva", time: "2 min atrás", user: "Sistema" },
    { id: 2, type: "contract", message: "Contrato gerado para Imóvel #1234", time: "15 min atrás", user: "Maria Santos" },
    { id: 3, type: "agent", message: "Agente Carlos completou 5 propostas", time: "1h atrás", user: "Sistema" },
    { id: 4, type: "investor", message: "Investidor novo cadastrado", time: "2h atrás", user: "Ana Costa" },
    { id: 5, type: "property", message: "Imóvel vendido: R$ 450.000", time: "3h atrás", user: "Pedro Lima" }
  ];

  return (
    <div className="w-full px-2 md:px-8 xl:px-16 space-y-8">
      {/* Filtros de Período */}
      <div className="flex items-center justify-end gap-2">
        {["7d", "30d", "90d", "1a"].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedPeriod === period
                ? "bg-[#0D4FF7] text-white shadow-md shadow-blue-500/20"
                : "bg-[#101C3A]/50 text-white/70 hover:bg-[#101C3A]/70 hover:text-white"
            }`}
          >
            {period === "7d" && "7 dias"}
            {period === "30d" && "30 dias"}
            {period === "90d" && "90 dias"}
            {period === "1a" && "1 ano"}
          </button>
        ))}
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Leads" value="1.247" change="+12%" color="blue" icon={<Users className="w-6 h-6" />} />
        <MetricCard title="Conversão" value="23.4%" change="+5.2%" color="green" icon={<BarChart2 className="w-6 h-6" />} />
        <MetricCard title="Receita" value="R$ 2.4M" change="+18%" color="orange" icon={<DollarSign className="w-6 h-6" />} />
        <MetricCard title="Imóveis Ativos" value="156" change="-3%" color="red" icon={<Building className="w-6 h-6" />} />
      </div>

      {/* Gráficos e Análises */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <BarChart data={leadsData} title="Funil de Leads" color="#0D4FF7" />
        </div>
        <div className="lg:col-span-2">
          <PieChart data={leadsBySource} title="Leads por Origem" />
        </div>
      </div>

      {/* Atividade Recente e Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={recentActivities} />
        <QuickActions />
      </div>
    </div>
  );
}