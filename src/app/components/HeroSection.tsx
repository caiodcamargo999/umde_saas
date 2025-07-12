'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedMockup from './AnimatedMockup';

export default function HeroSection() {
  const [showDemo, setShowDemo] = useState(false);
  const router = useRouter();

  return (
    <section className="relative flex items-center justify-center min-h-[100svh] py-16 md:py-24 text-center md:text-left overflow-hidden bg-gradient-to-b from-[#0D1A3A] to-[#000000]">
      {/* Efeito de fundo */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at 50% 40%, #0D4FF7 0%, transparent 60%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Conteúdo de Texto */}
        <motion.div 
          className="flex flex-col items-center md:items-start gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg text-balance">
            O CRM <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">mais poderoso</span> para o mercado imobiliário
          </h1>
          <p className="max-w-lg text-lg sm:text-xl text-white/70 text-balance">
            Centralize seus leads, gerencie seus imóveis e feche mais negócios com a plataforma tudo-em-um para corretores de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px #0D4FF7' }}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-base bg-[#0D4FF7] text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] focus:ring-offset-2"
              onClick={() => router.push('/auth')}
            >
              Comece agora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#13235a' }}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-base bg-white/10 text-white border border-[#0D4FF7] transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] focus:ring-offset-2"
              onClick={() => setShowDemo(true)}
            >
              Assista à demo
            </motion.button>
          </div>
        </motion.div>

        {/* Placeholder para Mockup Animado - você pode re-integrar o seu componente aqui */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
        >
          <AnimatedMockup />
        </motion.div>
      </div>

      {/* Modal de vídeo demo */}
      {showDemo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDemo(false)}
        >
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl shadow-2xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-2 -right-2 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition z-10"
              onClick={() => setShowDemo(false)}
              aria-label="Fechar vídeo"
            >
              ×
            </button>
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/2e6o5p2A9bA?autoplay=1" // Adicionado autoplay
              title="Demonstração UMDÊ CRM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}