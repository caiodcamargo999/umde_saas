'use client';
import { Building, Mail, Phone } from 'lucide-react';

interface Account {
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
}

interface AccountDetailsProps {
  account: Account;
}

export const AccountDetails = ({ account }: AccountDetailsProps) => {
  return (
    <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-6 border border-blue-500/20">
      <h2 className="text-xl font-bold text-white mb-4">Dados da Conta</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Building className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">Nome da Conta</label>
            <p className="text-white font-semibold">{account.nome}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Building className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">CNPJ</label>
            <p className="text-white font-semibold">{account.cnpj}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">E-mail</label>
            <p className="text-white font-semibold">{account.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-400" />
          <div>
            <label className="text-white/70 text-sm">Telefone</label>
            <p className="text-white font-semibold">{account.telefone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
