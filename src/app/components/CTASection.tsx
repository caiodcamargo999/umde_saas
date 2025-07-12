'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-t from-[#0D1A3A] to-[#0D4FF7] py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        {/* Efeito de fundo sutil */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(255,255,255,0.1),_transparent_40%)]"
          animate={{ transform: ['translateY(0%)', 'translateY(-20%)', 'translateY(0%)'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Pronto para transformar sua gestão de vendas?
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Crie sua conta gratuita, sem necessidade de cartão de crédito. Comece a otimizar suas vendas em minutos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 150 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link href="/auth" passHref>
            <motion.a
              className="inline-block px-8 py-4 rounded-full bg-white text-[#0D4FF7] font-bold text-lg shadow-2xl transform transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#0D4FF7]"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Começar gratuitamente
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}