'use client';
import { LogOut, Trash2 } from 'lucide-react';

interface AccountActionsProps {
  onLogout: () => void;
  onDeleteAccount: () => void;
}

export const AccountActions = ({ onLogout, onDeleteAccount }: AccountActionsProps) => {
  return (
    <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-6 border border-blue-500/20 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-white mb-2">Ações da Conta</h2>
      <button 
        onClick={onLogout}
        className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-white/10 text-white font-bold border border-blue-500/40 hover:bg-blue-500/20 transition-all"
      >
        <LogOut className="w-5 h-5" />
        Sair da Conta
      </button>
      <button 
        onClick={onDeleteAccount}
        className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-red-600/80 text-white font-bold shadow hover:bg-red-700 transition-all"
      >
        <Trash2 className="w-5 h-5" />
        Excluir Conta
      </button>
    </section>
  );
};
