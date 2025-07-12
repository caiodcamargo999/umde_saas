"use client";
import { usePathname } from 'next/navigation';

const getTitle = (pathname: string) => {
  const segment = pathname.split('/').pop();
  if (!segment) return 'Dashboard';
  const title = segment.charAt(0).toUpperCase() + segment.slice(1);
  return title.replace(/-/g, ' ');
}

export default function Topbar() {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <header className="w-full h-20 flex items-center justify-between px-8 bg-[#101C3A]/80 border-b border-[#0D4FF7]/20 shadow-lg z-10">
      <h1 className="text-2xl font-bold text-white/90">{title}</h1>
      <div className="flex items-center gap-4">
        {/* Usuário placeholder */}
        <span className="text-white/70 font-medium">Usuário</span>
        {/* Espaço para ações rápidas futuras */}
      </div>
    </header>
  );
} 