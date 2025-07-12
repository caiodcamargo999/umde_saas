'use client';
import { UserPlus, Trash2 } from 'lucide-react';

interface Membro {
  nome: string;
  email: string;
  permissao: string;
}

interface TeamManagementProps {
  membros: Membro[];
  novoEmail: string;
  setNovoEmail: (email: string) => void;
  convidarMembro: () => void;
  removerMembro: (email: string) => void;
}

export const TeamManagement = ({ membros, novoEmail, setNovoEmail, convidarMembro, removerMembro }: TeamManagementProps) => {
  return (
    <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-6 border border-blue-500/20">
      <h2 className="text-xl font-bold text-white mb-4">Time</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-white/70 mb-2">Convidar novo membro</label>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="E-mail do novo membro"
            value={novoEmail}
            onChange={e => setNovoEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={convidarMembro}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-all"
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Tabela tradicional para md+ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-white/80 font-bold">
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">E-mail</th>
              <th className="px-4 py-2">Permissão</th>
              <th className="px-4 py-2 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {membros.map((m) => (
              <tr key={m.email} className="border-t border-white/10 hover:bg-blue-500/5 transition">
                <td className="px-4 py-2 text-white font-medium">{m.nome}</td>
                <td className="px-4 py-2 text-white/70">{m.email}</td>
                <td className="px-4 py-2 text-white/70">{m.permissao}</td>
                <td className="px-4 py-2 text-right">
                  {m.permissao !== "Admin" && (
                    <button
                      onClick={() => removerMembro(m.email)}
                      className="p-2 rounded-lg bg-red-600/80 text-white shadow hover:bg-red-700 transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Cards verticais para mobile */}
      <div className="flex flex-col gap-4 md:hidden">
        {membros.map((m) => (
          <div key={m.email} className="rounded-2xl shadow-xl bg-[#101C3A]/50 border border-blue-500/20 p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white text-base">{m.nome}</span>
              <span className="px-2 py-1 rounded-full text-xs font-bold bg-white/10 text-white/80">{m.permissao}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/80">
              <span><span className="font-semibold text-white/60">E-mail:</span> {m.email}</span>
            </div>
            {m.permissao !== "Admin" && (
              <button
                className="mt-3 px-3 py-2 rounded-lg bg-red-600/80 text-white text-xs font-bold shadow hover:bg-red-700 transition-all self-end"
                onClick={() => removerMembro(m.email)}
              >
                Remover
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
