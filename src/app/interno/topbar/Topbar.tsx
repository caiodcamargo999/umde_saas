"use client";
import { usePathname } from 'next/navigation';

const getTitle = (pathname: string) => {
  const segment = pathname.split('/').pop();
  if (!segment) return 'Dashboard';
  const title = segment.charAt(0).toUpperCase() + segment.slice(1);
  return title.replace(/-/g, ' ');
}

export default function Topbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <header className="w-full h-20 flex items-center justify-between px-4 sm:px-8 bg-[#101C3A]/80 border-b border-[#0D4FF7]/20 shadow-lg z-30 sticky top-0">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-[#0D4FF7]/20">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-white/90">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Usuário placeholder */}
        <span className="text-white/70 font-medium hidden sm:block">Usuário</span>
        {/* Espaço para ações rápidas futuras */}
      </div>
    </header>
  );
} 