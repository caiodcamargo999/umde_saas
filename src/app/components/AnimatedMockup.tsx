"use client";

import { motion } from 'framer-motion'

export default function AnimatedMockup() {
  return (
    <section className="flex justify-center py-12 bg-transparent">
      <motion.div
        className="relative w-[340px] md:w-[540px] h-[220px] md:h-[320px] rounded-2xl bg-gradient-to-br from-[#101C3A] to-[#0D4FF7]/20 shadow-2xl border border-[#0D4FF7]/30 overflow-hidden"
        initial={{ scale: 0.95, boxShadow: '0 8px 32px #0D4FF7AA' }}
        animate={{ scale: [0.95, 1.02, 0.98, 1], boxShadow: ['0 8px 32px #0D4FF7AA', '0 0px 64px #0D4FF7', '0 8px 32px #0D4FF7AA', '0 0px 48px #0D4FF7'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Mockup simplificado do CRM */}
        <div className="absolute top-0 left-0 w-full h-10 bg-[#0D1A3A] border-b border-[#0D4FF7]/30 flex items-center px-4">
          <div className="w-4 h-4 rounded-full bg-[#0D4FF7] mr-2" />
          <div className="w-4 h-4 rounded-full bg-white/20 mr-2" />
          <div className="w-4 h-4 rounded-full bg-white/10" />
        </div>
        <div className="flex flex-col gap-2 p-6 pt-14">
          <div className="h-6 w-2/3 bg-[#0D4FF7]/60 rounded mb-2" />
          <div className="h-4 w-1/2 bg-white/10 rounded mb-4" />
          <div className="flex gap-2">
            <div className="h-16 w-1/3 bg-white/10 rounded-lg" />
            <div className="h-16 w-1/3 bg-white/10 rounded-lg" />
            <div className="h-16 w-1/3 bg-white/10 rounded-lg" />
          </div>
          <div className="h-4 w-full bg-white/5 rounded mt-4" />
          <div className="h-4 w-5/6 bg-white/5 rounded" />
        </div>
      </motion.div>
    </section>
  )
} 