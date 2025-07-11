"use client";
import { motion } from "framer-motion";
import React from "react";

type AuthButtonProps = React.PropsWithChildren<{
  type?: "button" | "submit" | "reset";
  variant?: "default" | "google";
}>;

export default function AuthButton({ children, type = "button", variant = "default" }: AuthButtonProps) {
  const base =
    "w-full flex items-center justify-center px-6 py-3 rounded-full font-bold text-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0D4FF7] focus:ring-offset-2 mt-1";
  const neon =
    "bg-[#0D4FF7] text-white shadow-lg hover:shadow-[0_0_16px_#0D4FF7]";
  const google =
    "bg-white text-[#0D4FF7] border border-[#0D4FF7] hover:bg-[#0D4FF7] hover:text-white";

  return (
    <motion.button
      type={type}
      className={
        base +
        " " +
        (variant === "google"
          ? google
          : neon)
      }
      whileHover={{ scale: 1.04, boxShadow: variant === "google" ? "0 0 16px #0D4FF7" : "0 0 24px #0D4FF7AA" }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
} 