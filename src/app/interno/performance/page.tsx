'use client';
import { useState } from "react";
import { PerformanceMetricCard } from "./components/PerformanceMetricCard";
import { PerformanceChart } from "./components/PerformanceChart";
import { PerformanceHeader } from "./components/PerformanceHeader";

export default function PerformancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Dados simulados para as métricas
  const metricCardsData = [
    { title: "Taxa de Conversão", value: "24%", description: "Média geral", change: "+2.1%", color: "blue" as const },
    { title: "Tempo Médio de Fechamento", value: "18 dias", description: "Últimos 30 dias", change: "-1.5d", color: "green" as const },
    { title: "Leads Atendidos", value: "112", description: "Este mês", change: "+15", color: "orange" as const },
    { title: "Vendas Fechadas", value: "32", description: "Últimos 30 dias", change: "+5", color: "red" as const },
  ];

  // Dados simulados para os gráficos
  const leadsData = [
    { name: 'Jan', Leads: 4000 }, { name: 'Fev', Leads: 3000 }, { name: 'Mar', Leads: 2000 },
    { name: 'Abr', Leads: 2780 }, { name: 'Mai', Leads: 1890 }, { name: 'Jun', Leads: 2390 },
    { name: 'Jul', Leads: 3490 },
  ];

  const salesData = [
    { name: 'Jan', Vendas: 2400 }, { name: 'Fev', Vendas: 1398 }, { name: 'Mar', Vendas: 9800 },
    { name: 'Abr', Vendas: 3908 }, { name: 'Mai', Vendas: 4800 }, { name: 'Jun', Vendas: 3800 },
    { name: 'Jul', Vendas: 4300 },
  ];

  const conversionData = [
    { name: 'Jan', Conversão: 20 }, { name: 'Fev', Conversão: 22 }, { name: 'Mar', Conversão: 18 },
    { name: 'Abr', Conversão: 25 }, { name: 'Mai', Conversão: 23 }, { name: 'Jun', Conversão: 20 },
    { name: 'Jul', Conversão: 28 },
  ];

  return (
    <div className="p-4">
      <PerformanceHeader selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricCardsData.map((card, i) => (
          <PerformanceMetricCard key={i} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <PerformanceChart data={leadsData} title="Leads Gerados" dataKey="Leads" type="line" strokeColor="#0D4FF7" />
        <PerformanceChart data={salesData} title="Vendas Fechadas" dataKey="Vendas" type="bar" strokeColor="#25D366" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <PerformanceChart data={conversionData} title="Taxa de Conversão" dataKey="Conversão" type="line" strokeColor="#FF6B35" />
      </div>
    </div>
  );
}