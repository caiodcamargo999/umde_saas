'use client';
import { useState } from "react";
import { AccountDetails } from "./components/AccountDetails";
import { UserDetails } from "./components/UserDetails";
import { TeamManagement } from "./components/TeamManagement";
import { AccountActions } from "./components/AccountActions";

// Mock de dados (substituir por integração real futuramente)
const initialAccount = {
  nome: "Imobiliária UMDÊ",
  cnpj: "12.345.678/0001-99",
  email: "contato@umde.com",
  telefone: "(11) 99999-8888"
};
const initialCurrentUser = {
  nome: "Rafael Silva",
  email: "rafael@umde.com",
  permissao: "Admin"
};
const initialTeamMembers = [
  { nome: "Rafael Silva", email: "rafael@umde.com", permissao: "Admin" },
  { nome: "Juliana Alves", email: "juliana@umde.com", permissao: "Membro" },
  { nome: "Lucas Martins", email: "lucas@umde.com", permissao: "Membro" }
];

export default function ConfiguracoesPage() {
  const [account] = useState(initialAccount);
  const [currentUser] = useState(initialCurrentUser);
  const [membros, setMembros] = useState(initialTeamMembers);
  const [novoEmail, setNovoEmail] = useState("");

  const convidarMembro = () => {
    if (novoEmail && !membros.find(m => m.email === novoEmail)) {
      setMembros([...membros, { nome: "Novo Membro", email: novoEmail, permissao: "Membro" }]);
      setNovoEmail("");
      alert(`Membro ${novoEmail} convidado com sucesso!`);
    } else if (membros.find(m => m.email === novoEmail)) {
      alert("Este e-mail já é um membro da equipe.");
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };

  const removerMembro = (email: string) => {
    if (confirm(`Tem certeza que deseja remover ${email} da equipe?`)) {
      setMembros(membros.filter(m => m.email !== email));
      alert(`${email} removido com sucesso!`);
    }
  };

  const handleEditUser = () => {
    alert("Funcionalidade de editar dados do usuário será implementada!");
  };

  const handleLogout = () => {
    if (confirm("Tem certeza que deseja sair da conta?")) {
      alert("Saindo da conta...");
      // Lógica de logout real aqui
    }
  };

  const handleDeleteAccount = () => {
    if (confirm("ATENÇÃO: Esta ação é irreversível. Tem certeza que deseja excluir sua conta?")) {
      alert("Excluindo conta...");
      // Lógica de exclusão de conta real aqui
    }
  };

  return (
    <div className="w-full px-2 md:px-8 xl:px-16 py-6">
      <h1 className="text-3xl font-bold mb-8 text-white">Configurações da Conta</h1>

      <AccountDetails account={account} />
      <UserDetails user={currentUser} onEditUser={handleEditUser} />
      <TeamManagement 
        membros={membros} 
        novoEmail={novoEmail} 
        setNovoEmail={setNovoEmail} 
        convidarMembro={convidarMembro} 
        removerMembro={removerMembro} 
      />
      <AccountActions onLogout={handleLogout} onDeleteAccount={handleDeleteAccount} />
    </div>
  );
}