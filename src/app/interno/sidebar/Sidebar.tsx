"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
  { label: "Agentes", href: "/interno/agentes", icon: icons.agentes },
  { label: "Investidores", href: "/interno/investidores", icon: icons.investidores },
  { label: "Contratos", href: "/interno/contratos", icon: icons.contratos },
  { label: "Configurações", href: "/interno/configuracoes", icon: icons.configuracoes },
];

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void; }) {
  const pathname = usePathname();
  return (
    <>
      {/* Overlay for mobile */}
      <div className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <aside className={`flex flex-col w-64 lg:w-32 bg-[#101C3A]/90 border-r border-[#0D4FF7]/20 backdrop-blur-lg pt-0 items-center gap-2 shadow-2xl z-50 min-h-screen fixed top-0 h-screen transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="w-full flex items-center justify-between h-20 lg:h-32 bg-transparent mb-0 lg:mb-6 px-4 lg:px-0">
          <Link href="/interno/dashboard" className="flex items-center gap-2 lg:justify-center lg:w-full">
            <Image src="/logo/umde-icon.png" alt="Logo Umdê" width={40} height={40} className="object-contain lg:w-24 lg:h-24" priority />
            <span className="font-bold text-lg tracking-tight text-white/90 lg:hidden">UMDÊ</span>
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-[#0D4FF7]/20">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 w-full items-start lg:items-center px-4 lg:px-0">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleSidebar}
                className={`group flex items-center gap-3 lg:gap-1 lg:flex-col px-3 py-2 lg:py-3 rounded-xl transition-all text-base lg:text-xs font-semibold w-full lg:w-20 hover:bg-[#0D4FF7]/10 ${active ? "bg-[#0D4FF7]/30 text-[#0D4FF7] shadow-[0_0_8px_#0D4FF7]" : "text-white/70"}`}>
                <span className={`text-xl transition-colors ${active ? "text-[#0D4FF7]" : "text-white/60"}`}>{item.icon}</span>
                <span className="font-medium truncate lg:w-full lg:text-center">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
 