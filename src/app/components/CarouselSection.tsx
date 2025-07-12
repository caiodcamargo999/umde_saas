'use client';
import React from 'react';
import { Carousel } from './Carousel';
import Image from 'next/image';

const carouselItems = [
  {
    src: "https://placehold.co/1200x800/0D1A3A/FFFFFF?text=Kanban+de+Leads",
    alt: "Kanban de Leads",
    title: "Kanban de Leads Interativo",
    description: "Visualize e gerencie seu funil de vendas com uma interface arrasta e solta."
  },
  {
    src: "https://placehold.co/1200x800/0D1A3A/FFFFFF?text=Dashboard+de+Performance",
    alt: "Dashboard de Performance",
    title: "Dashboard de Performance em Tempo Real",
    description: "Acompanhe métricas, metas e resultados da sua equipe com gráficos dinâmicos."
  },
  {
    src: "https://placehold.co/1200x800/0D1A3A/FFFFFF?text=Central+de+Mensagens",
    alt: "Central de Mensagens",
    title: "Central de Mensagens Unificada",
    description: "Conecte seu WhatsApp e centralize todas as conversas com clientes em um só lugar."
  },
];

const slides = carouselItems.map((item) => (
  <div className="relative aspect-video rounded-2xl overflow-hidden" key={item.alt}>
    <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
      <h4 className="text-xl font-bold text-white">{item.title}</h4>
      <p className="text-white/80">{item.description}</p>
    </div>
  </div>
));

export default function CarouselSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold text-[#0D4FF7] tracking-wider uppercase">Visão Geral da Plataforma</h2>
        <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Uma experiência de uso fluida e intuitiva
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-white/70">
          Navegue pelas principais ferramentas da UMDÊ e veja como podemos transformar sua rotina.
        </p>
      </div>
      <Carousel slides={slides} options={{ loop: true }} />
    </section>
  );
}