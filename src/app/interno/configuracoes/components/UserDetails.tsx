'use client';
import { User, Mail, Key } from 'lucide-react';

interface UserType {
  nome: string;
  email: string;
  permissao: string;
}

interface UserDetailsProps {
  user: UserType;
  onEditUser: () => void;
}

export const UserDetails = ({ user, onEditUser }: UserDetailsProps) => {
  return (
    <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-6 border border-blue-500/20">
      <h2 className="text-xl font-bold text-white mb-4">Seu Usuário</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">Nome</label>
            <p className="text-white font-semibold">{user.nome}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">E-mail</label>
            <p className="text-white font-semibold">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Key className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">Permissão</label>
            <p className="text-white font-semibold">{user.permissao}</p>
          </div>
        </div>
      </div>
      <button 
        onClick={onEditUser}
        className="mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-all text-sm"
      >
        Editar Dados
      </button>
    </section>
  );
};
