"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// SVG minimalista para cada item (placeholders, troque por Heroicons/Lucide depois)
const icons = {
  dashboard: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor"/><rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor"/><rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor"/><rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor"/></svg>
  ),
  leads: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  imoveis: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><path d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2v-5H7v5H5a2 2 0 01-2-2v-7z" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  agentes: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  investidores: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  contratos: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  performance: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2"/><path d="M12 3v12" stroke="currentColor" strokeWidth="2"/><path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  configuracoes: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-inherit"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg>
  ),
};

const navItems = [
  { label: "Dashboard", href: "/interno/dashboard", icon: icons.dashboard },
  { label: "Leads", href: "/interno/leads", icon: icons.leads },
  { label: "Imóveis", href: "/interno/imoveis", icon: icons.imoveis },
  { label: "Oportunidades", href: "/interno/oportunidades", icon: icons.leads },
  { label: "Agentes", href: "/interno/agentes", icon: icons.agentes },
  { label: "Investidores", href: "/interno/investidores", icon: icons.investidores },
  { label: "Contratos", href: "/interno/contratos", icon: icons.contratos },
  { label: "Performance", href: "/interno/performance", icon: icons.performance },
  { label: "Configurações", href: "/interno/configuracoes", icon: icons.configuracoes },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-28 bg-[#101C3A]/90 border-r border-[#0D4FF7]/20 backdrop-blur-lg pt-0 items-center gap-2 shadow-2xl z-20 min-h-screen fixed left-0 top-0 h-screen">
      {/* Logo Umdê no topo, ocupando toda a largura do retângulo */}
      <div className="w-full flex items-center justify-center h-24 bg-transparent mb-6">
        <img src="/logo/umde-icon.png" alt="Logo Umdê" className="object-contain w-16 h-16 md:w-20 md:h-20" style={{maxHeight:'80px', maxWidth:'80px'}} />
      </div>
      <nav className="flex flex-col gap-2 w-full items-center">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex flex-col items-center gap-1 px-2 py-3 rounded-xl transition-all text-xs font-semibold w-20 hover:bg-[#0D4FF7]/10 ${active ? "bg-[#0D4FF7]/30 text-[#0D4FF7] shadow-[0_0_8px_#0D4FF7]" : "text-white/70"}`}
            >
              <span className={`text-xl mb-1 transition-colors ${active ? "text-[#0D4FF7]" : "text-white/60"}`}>{item.icon}</span>
              <span className="text-xs font-medium truncate w-full text-center">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
} 