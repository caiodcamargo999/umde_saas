'use client';
import { useState } from "react";
import { ImovelTable } from "./components/ImovelTable";
import { ImovelDetailPanel } from "./components/ImovelDetailPanel";
import { ImoveisHeader } from "./components/ImoveisHeader";

const initialImoveis = [
  { id: "1", nome: "Apto. Vila Mariana", tipo: "Apartamento", status: "Disponível", valor: "R$ 850.000", cidade: "São Paulo" },
  { id: "2", nome: "Casa Jardim Europa", tipo: "Casa", status: "Em negociação", valor: "R$ 2.100.000", cidade: "São Paulo" },
  { id: "3", nome: "Sala Comercial Centro", tipo: "Comercial", status: "Alugado", valor: "R$ 6.500/mês", cidade: "Belo Horizonte" },
  { id: "4", nome: "Cobertura Praia", tipo: "Cobertura", status: "Disponível", valor: "R$ 1.800.000", cidade: "Florianópolis" },
];

export type Imovel = typeof initialImoveis[number] & { id: string };

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState<Imovel[]>(initialImoveis);
  const [selectedImovel, setSelectedImovel] = useState<Imovel | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImoveis = imoveis.filter(imovel => 
    imovel.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    imovel.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    imovel.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateImovel = (updatedImovel: Imovel) => {
    setImoveis(imoveis.map(i => i.id === updatedImovel.id ? updatedImovel : i));
    setSelectedImovel(updatedImovel);
  };

  const handleAddImovel = () => {
    alert("Funcionalidade de adicionar imóvel será implementada!");
  };

  return (
    <div className="w-full px-2 md:px-8 xl:px-16">
      <ImoveisHeader 
        onSearch={setSearchTerm} 
        onAddImovel={handleAddImovel} 
      />

      <ImovelTable imoveis={filteredImoveis} onImovelClick={setSelectedImovel} />

      <ImovelDetailPanel 
        imovel={selectedImovel} 
        onClose={() => setSelectedImovel(null)} 
        onUpdateImovel={handleUpdateImovel}
      />
    </div>
  );
}