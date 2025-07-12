import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function SidePanel({ open, onClose, title, children }: SidePanelProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          {/* Painel lateral */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-full md:max-w-xl bg-[#101C3A] border-l border-blue-500/30 shadow-2xl z-50 flex flex-col overflow-x-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-4 md:p-6 border-b border-blue-500/20 flex justify-between items-center w-full">
              <h2 className="text-xl font-bold text-white truncate">{title}</h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>
            <div className="flex-1 p-4 md:p-6 overflow-y-auto w-full max-w-full overflow-x-hidden">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 