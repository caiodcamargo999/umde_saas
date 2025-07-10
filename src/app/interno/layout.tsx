"use client";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useState } from "react";

const navLinks = [
  { href: "/interno/dashboard", label: "Dashboard" },
  { href: "/interno/leads", label: "Leads" },
  { href: "/interno/imoveis", label: "Imóveis" },
  { href: "/interno/agentes", label: "Agentes" },
  { href: "/interno/investidores", label: "Investidores" },
  { href: "/interno/contratos", label: "Contratos" },
  { href: "/interno/performance", label: "Performance" },
  { href: "/interno/configuracoes", label: "Configurações" },
];

export default function InternoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-56 min-h-screen bg-[#101C3A] border-r border-[#19244A] px-4 py-6 gap-8 fixed left-0 top-0 z-20 animate-fade-in">
        <div className="flex flex-col items-center gap-2 mb-8">
          <Image src="/logo/umde-logo.png" alt="Logo Umdê" width={140} height={36} priority className="w-full h-auto max-w-[140px]" />
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-white/80 hover:bg-[#0D4FF7] hover:text-white font-semibold transition-all duration-150 focus:bg-[#0D4FF7] focus:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      {/* Botão de menu mobile minimalista e animado */}
      <button
        className="md:hidden fixed top-2 left-2 z-30 w-9 h-9 bg-transparent focus:outline-none group p-0 m-0 relative"
        aria-label={drawerOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setDrawerOpen(!drawerOpen)}
        style={{ boxShadow: 'none', border: 'none' }}
      >
        <span className={`absolute left-1 top-2 w-7 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${drawerOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`absolute left-1 top-4 w-7 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${drawerOpen ? 'opacity-0' : ''}`}></span>
        <span className={`absolute left-1 top-6 w-7 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${drawerOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Drawer Mobile */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setDrawerOpen(false)}
            aria-label="Fechar menu"
          />
          {/* Drawer */}
          <aside className="relative w-64 max-w-[80vw] h-full bg-[#101C3A] border-r border-[#19244A] flex flex-col px-6 py-8 gap-8 animate-slide-in-left shadow-2xl">
            <div className="flex flex-col items-center gap-2 mb-8">
              <Image src="/logo/umde-logo.png" alt="Logo Umdê" width={120} height={32} priority className="w-full h-auto max-w-[120px]" />
            </div>
            <nav className="flex flex-col gap-2 w-full">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-white/90 hover:bg-[#0D4FF7] hover:text-white font-semibold text-lg transition-all duration-150 focus:bg-[#0D4FF7] focus:text-white"
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
      {/* Main content */}
      <div className="flex-1 min-h-screen w-full md:ml-56 flex flex-col animate-fade-in bg-[#0D1A3A]">
        {children}
      </div>
      {/* Animations */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .group { position: relative; }
        .group span { left: 0; }
      `}</style>
    </>
  );
} 