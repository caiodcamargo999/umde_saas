"use client";

export default function Topbar() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 md:px-8 bg-[#101C3A]/80 border-b border-[#0D4FF7]/20 shadow-lg z-10">
      <div className="flex items-center gap-2">
        {/* Logo placeholder */}
        <div className="w-8 h-8 rounded-full bg-[#0D4FF7] flex items-center justify-center font-black text-white text-lg shadow-lg">U</div>
        <span className="font-bold text-lg tracking-tight text-white/90">UMDÊ CRM</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Usuário placeholder */}
        <span className="text-white/70 font-medium">Usuário</span>
        {/* Espaço para ações rápidas futuras */}
      </div>
    </header>
  );
} 