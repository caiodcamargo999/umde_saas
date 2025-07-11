"use client";
import { useState } from "react";

// Componente de Card de Métrica
const MetricCard = ({ title, value, change, icon, color = "blue" }: {
  title: string;
  value: string;
  change?: string;
  icon: React.ReactNode;
  color?: "blue" | "green" | "orange" | "red";
}) => {
  const colorClasses = {
    blue: "bg-[#0D4FF7]/10 border-[#0D4FF7]/30 text-[#0D4FF7]",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    red: "bg-red-500/10 border-red-500/30 text-red-400"
  };

  return (
    <div className={`p-4 md:p-6 rounded-2xl border ${colorClasses[color]} backdrop-blur-sm transition-all hover:scale-105`}>
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="text-xl md:text-2xl">{icon}</div>
        {change && (
          <span className={`text-xs md:text-sm font-semibold ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-lg md:text-2xl font-bold mb-1">{value}</h3>
      <p className="text-xs md:text-sm opacity-80">{title}</p>
    </div>
  );
};

// Componente de Gráfico Simples
const SimpleChart = ({ data, title, color = "#0D4FF7" }: {
  data: { label: string; value: number }[];
  title: string;
  color?: string;
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="bg-[#101C3A]/50 p-4 md:p-6 rounded-2xl border border-[#0D4FF7]/20 backdrop-blur-sm">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">{title}</h3>
      <div className="space-y-2 md:space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-3">
            <div className="w-16 md:w-20 text-xs md:text-sm text-white/70">{item.label}</div>
            <div className="flex-1 bg-[#1A2332] rounded-full h-2 md:h-3 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: color
                }}
              />
            </div>
            <div className="w-8 md:w-12 text-xs md:text-sm font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Gráfico de Pizza
const PieChart = ({ data, title }: {
  data: { label: string; value: number; color: string }[];
  title: string;
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-[#101C3A]/50 p-4 md:p-6 rounded-2xl border border-[#0D4FF7]/20 backdrop-blur-sm">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">{title}</h3>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const previousPercentages = data
                .slice(0, index)
                .reduce((sum, d) => sum + (d.value / total) * 100, 0);
              
              const startAngle = (previousPercentages / 100) * 360;
              const endAngle = ((previousPercentages + percentage) / 100) * 360;
              
              const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
              
              const largeArcFlag = percentage > 50 ? 1 : 0;
              
              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">{total}</div>
              <div className="text-xs text-white/70">Total</div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs md:text-sm text-white/80">{item.label}</span>
              <span className="text-xs md:text-sm font-semibold text-white ml-auto">
                {Math.round((item.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente de Atividade Recente
const RecentActivity = ({ activities }: {
  activities: { id: number; type: string; message: string; time: string; user: string }[];
}) => {
  return (
    <div className="bg-[#101C3A]/50 p-4 md:p-6 rounded-2xl border border-[#0D4FF7]/20 backdrop-blur-sm">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Atividade Recente</h3>
      <div className="space-y-2 md:space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-[#1A2332]/50 hover:bg-[#1A2332]/70 transition-all">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0D4FF7] rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-white/90">{activity.message}</p>
              <div className="flex items-center gap-1 md:gap-2 mt-1">
                <span className="text-xs text-[#0D4FF7] font-medium">{activity.user}</span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-white/50">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Dados simulados
  const leadsData = [
    { label: "Novos", value: 45 },
    { label: "Qualificados", value: 32 },
    { label: "Proposta", value: 18 },
    { label: "Fechados", value: 12 }
  ];

  const performanceData = [
    { label: "Agente A", value: 85 },
    { label: "Agente B", value: 72 },
    { label: "Agente C", value: 68 },
    { label: "Agente D", value: 54 }
  ];

  const leadsBySource = [
    { label: "WhatsApp", value: 35, color: "#25D366" },
    { label: "Canal Pro", value: 28, color: "#0D4FF7" },
    { label: "Website", value: 22, color: "#FF6B35" },
    { label: "Indicação", value: 15, color: "#8B5CF6" }
  ];

  const recentActivities = [
    { id: 1, type: "lead", message: "Novo lead qualificado: João Silva", time: "2 min atrás", user: "Sistema" },
    { id: 2, type: "contract", message: "Contrato gerado para Imóvel #1234", time: "15 min atrás", user: "Maria Santos" },
    { id: 3, type: "agent", message: "Agente Carlos completou 5 propostas", time: "1h atrás", user: "Sistema" },
    { id: 4, type: "investor", message: "Investidor novo cadastrado", time: "2h atrás", user: "Ana Costa" },
    { id: 5, type: "property", message: "Imóvel vendido: R$ 450.000", time: "3h atrás", user: "Pedro Lima" }
  ];

  return (
    <div className="min-h-screen bg-[#0D1A3A] p-2 sm:p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
          Dashboard
        </h1>
        <p className="text-white/70 text-base md:text-lg">
          Visão geral da conta
        </p>
      </div>

      {/* Filtros de Período */}
      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
        {["7d", "30d", "90d", "1a"].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedPeriod === period
                ? "bg-[#0D4FF7] text-white shadow-[0_0_20px_#0D4FF7]/30"
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
        <MetricCard
          title="Leads"
          value="1.247"
          change="+12%"
          color="blue"
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-inherit">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          }
        />
        <MetricCard
          title="Conversão"
          value="23.4%"
          change="+5.2%"
          color="green"
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-inherit">
              <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 3v12" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          }
        />
        <MetricCard
          title="Faturamento"
          value="R$ 2.4M"
          change="+18%"
          color="orange"
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-inherit">
              <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          }
        />
        <MetricCard
          title="Imóveis"
          value="89"
          change="-3"
          color="red"
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-inherit">
              <path d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2v-5H7v5H5a2 2 0 01-2-2v-7z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          }
        />
      </div>

      {/* Gráficos e Análises */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <SimpleChart
          title="Funil de Leads"
          data={leadsData}
          color="#0D4FF7"
        />
        <PieChart
          title="Leads por Origem"
          data={leadsBySource}
        />
      </div>

      {/* Seção Performance */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-bold text-white mb-4">Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <SimpleChart
            title="Performance dos Agentes"
            data={performanceData}
            color="#25D366"
          />
          <RecentActivity activities={recentActivities} />
        </div>
      </div>

      {/* Métricas Secundárias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#101C3A]/50 p-4 md:p-6 rounded-2xl border border-[#0D4FF7]/20 backdrop-blur-sm">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Tempo Médio de Conversão</h3>
          <div className="text-2xl md:text-3xl font-bold text-[#0D4FF7] mb-2">18 dias</div>
          <p className="text-xs md:text-sm text-white/70">Redução de 3 dias vs mês anterior</p>
        </div>
        
        <div className="bg-[#101C3A]/50 p-4 md:p-6 rounded-2xl border border-[#0D4FF7]/20 backdrop-blur-sm">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Taxa de Ocupação</h3>
          <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">94.2%</div>
          <p className="text-xs md:text-sm text-white/70">Aumento de 2.1% vs mês anterior</p>
        </div>
        
        <div className="bg-[#101C3A]/50 p-4 md:p-6 rounded-2xl border border-[#0D4FF7]/20 backdrop-blur-sm">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">ROI Médio</h3>
          <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">28.5%</div>
          <p className="text-xs md:text-sm text-white/70">Aumento de 4.2% vs mês anterior</p>
        </div>
      </div>
    </div>
  );
} 