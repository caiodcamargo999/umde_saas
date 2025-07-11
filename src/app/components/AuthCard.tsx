"use client";
import { motion } from "framer-motion";
import AuthButton from "./AuthButton";

export default function AuthCard() {
  return (
    <motion.div
      className="bg-[#101C3A]/80 rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12 flex flex-col items-center gap-6 sm:gap-8 w-full max-w-md border border-[#0D4FF7]/30 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-[#0D4FF7] text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Entrar na plataforma
      </motion.h1>
      <form className="flex flex-col gap-4 w-full">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-[#0D4FF7]/20 focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] transition"
        />
        <AuthButton type="submit">Entrar</AuthButton>
      </form>
      <div className="w-full flex items-center gap-2 my-2">
        <div className="flex-1 h-px bg-white/20" />
        <span className="text-white/40 text-xs">ou</span>
        <div className="flex-1 h-px bg-white/20" />
      </div>
      <AuthButton type="button" variant="google">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2"><g clipPath="url(#clip0_993_156)"><path d="M19.8052 10.2309C19.8052 9.5508 19.7481 8.86729 19.6254 8.19824H10.1992V12.0491H15.6262C15.4012 13.2721 14.6522 14.3376 13.6017 15.0377V17.0376H16.6012C18.4012 15.3721 19.8052 13.0721 19.8052 10.2309Z" fill="#4285F4"/><path d="M10.1992 20.0002C12.6992 20.0002 14.8012 19.1721 16.4012 17.6376L13.6017 15.0377C12.7017 15.6377 11.6012 16.0002 10.1992 16.0002C7.80119 16.0002 5.80119 14.3376 5.10119 12.0721H2.20117V14.1376C3.80117 17.2376 6.80119 20.0002 10.1992 20.0002Z" fill="#34A853"/><path d="M5.10119 12.0721C4.80119 11.2721 4.60117 10.4002 4.60117 9.50024C4.60117 8.60024 4.80119 7.72767 5.10119 6.92767V4.86218H2.20117C1.60117 6.07218 1.19922 7.50024 1.19922 9.50024C1.19922 11.5002 1.60117 12.9277 2.20117 14.1376L5.10119 12.0721Z" fill="#FBBC05"/><path d="M10.1992 3.99999C11.7012 3.99999 13.0012 4.51218 14.0012 5.46218L16.5012 2.96218C14.8012 1.40024 12.6992 0.000244141 10.1992 0.000244141C6.80119 0.000244141 3.80117 2.76218 2.20117 4.86218L5.10119 6.92767C5.80119 4.66218 7.80119 3.99999 10.1992 3.99999Z" fill="#EA4335"/></g><defs><clipPath id="clip0_993_156"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
        Entrar com Google
      </AuthButton>
      <p className="text-xs text-white/40 mt-2 text-center">Ao entrar, você concorda com os Termos de Uso e Política de Privacidade.</p>
    </motion.div>
  );
} 