"use client";
// @ts-ignore
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 text-center overflow-hidden bg-gradient-to-b from-[#0D1A3A] to-[#000000]">
      {/* Azul pulsando no fundo */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at 50% 40%, #0D4FF7 0%, transparent 70%)' }}
      />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#0D4FF7] to-white drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          O CRM mais poderoso para o mercado imobiliário
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 16px #0D4FF7' }}
            className="px-8 py-3 rounded-full font-bold text-lg bg-[#0D4FF7] text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] focus:ring-offset-2"
            style={{ boxShadow: '0 0 24px #0D4FF7AA' }}
          >
            Comece agora
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#13235a' }}
            className="px-8 py-3 rounded-full font-bold text-lg bg-white/10 text-white border border-[#0D4FF7] transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] focus:ring-offset-2"
          >
            Assista à demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 