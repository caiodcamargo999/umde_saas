import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UMDÊ SaaS CRM",
  description: "CRM Imobiliário mais inteligente do Brasil",
};

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
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex bg-[#0D1A3A]`}>
        {/* Sidebar */}
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
        {/* Main content */}
        <div className="flex-1 min-h-screen w-full md:ml-56 flex flex-col animate-fade-in">
          {/* Header para mobile removido para evitar duplicidade da logo */}
          {children}
        </div>
      </body>
    </html>
  );
} 