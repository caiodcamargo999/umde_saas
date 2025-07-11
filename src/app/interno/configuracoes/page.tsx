"use client";
import { useState } from "react";

// Mock de dados (substituir por integração real futuramente)
const conta = {
  nome: "Imobiliária UMDÊ",
  cnpj: "12.345.678/0001-99",
  email: "contato@umde.com",
  telefone: "(11) 99999-8888"
};
const usuarioAtual = {
  nome: "Rafael Silva",
  email: "rafael@umde.com",
  permissao: "Admin"
};
const membrosTime = [
  { nome: "Rafael Silva", email: "rafael@umde.com", permissao: "Admin" },
  { nome: "Juliana Alves", email: "juliana@umde.com", permissao: "Membro" },
  { nome: "Lucas Martins", email: "lucas@umde.com", permissao: "Membro" }
];

export default function ConfiguracoesPage() {
  const [membros, setMembros] = useState(membrosTime);
  const [novoEmail, setNovoEmail] = useState("");

  const convidarMembro = () => {
    if (novoEmail && !membros.find(m => m.email === novoEmail)) {
      setMembros([...membros, { nome: "Novo Membro", email: novoEmail, permissao: "Membro" }]);
      setNovoEmail("");
    }
  };
  const removerMembro = (email: string) => {
    setMembros(membros.filter(m => m.email !== email));
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-6 px-2 sm:px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-white/90 tracking-tight">Configurações da Conta</h1>

      {/* Dados da Conta */}
      <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-5 border border-[#0D4FF7]/20">
        <h2 className="text-lg font-bold text-[#0D4FF7] mb-4">Dados da Conta</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-white/70 text-xs">Nome da Conta</label>
            <div className="text-white font-semibold">{conta.nome}</div>
          </div>
          <div>
            <label className="text-white/70 text-xs">CNPJ</label>
            <div className="text-white font-semibold">{conta.cnpj}</div>
          </div>
          <div>
            <label className="text-white/70 text-xs">E-mail</label>
            <div className="text-white font-semibold">{conta.email}</div>
          </div>
          <div>
            <label className="text-white/70 text-xs">Telefone</label>
            <div className="text-white font-semibold">{conta.telefone}</div>
          </div>
        </div>
      </section>

      {/* Usuário Atual */}
      <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-5 border border-[#0D4FF7]/20">
        <h2 className="text-lg font-bold text-[#0D4FF7] mb-4">Seu Usuário</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-white/70 text-xs">Nome</label>
            <div className="text-white font-semibold">{usuarioAtual.nome}</div>
          </div>
          <div>
            <label className="text-white/70 text-xs">E-mail</label>
            <div className="text-white font-semibold">{usuarioAtual.email}</div>
          </div>
          <div>
            <label className="text-white/70 text-xs">Permissão</label>
            <div className="text-white font-semibold">{usuarioAtual.permissao}</div>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow hover:bg-blue-700 transition-all text-sm">Editar Dados</button>
      </section>

      {/* Time */}
      <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-5 border border-[#0D4FF7]/20">
        <h2 className="text-lg font-bold text-[#0D4FF7] mb-4">Time</h2>
        <div className="mb-4">
          <label className="text-white/70 text-xs mb-1 block">Convidar novo membro</label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="E-mail do novo membro"
              value={novoEmail}
              onChange={e => setNovoEmail(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] text-sm"
            />
            <button
              onClick={convidarMembro}
              className="px-4 py-2 rounded-lg bg-[#0D4FF7] text-white font-bold shadow hover:bg-blue-700 transition-all text-sm"
            >Convidar</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[#0D4FF7] text-xs font-bold">
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">E-mail</th>
                <th className="px-4 py-2">Permissão</th>
                <th className="px-4 py-2 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {membros.map((m) => (
                <tr key={m.email} className="border-t border-white/10 hover:bg-[#0D4FF7]/5 transition">
                  <td className="px-4 py-2 text-white/90 font-medium">{m.nome}</td>
                  <td className="px-4 py-2 text-white/70">{m.email}</td>
                  <td className="px-4 py-2 text-white/70">{m.permissao}</td>
                  <td className="px-4 py-2 text-right">
                    {m.permissao !== "Admin" && (
                      <button
                        onClick={() => removerMembro(m.email)}
                        className="px-3 py-1 rounded-lg bg-red-600/80 text-white text-xs font-bold shadow hover:bg-red-700 transition-all"
                      >Remover</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ações */}
      <section className="mb-8 bg-[#101C3A]/60 rounded-2xl p-5 border border-[#0D4FF7]/20 flex flex-col gap-3">
        <button className="px-4 py-2 rounded-lg bg-white/10 text-white font-bold border border-[#0D4FF7]/40 hover:bg-[#0D4FF7]/20 transition-all text-sm">Sair da Conta</button>
        <button className="px-4 py-2 rounded-lg bg-red-600/80 text-white font-bold shadow hover:bg-red-700 transition-all text-sm">Excluir Conta</button>
      </section>
    </div>
  );
} 