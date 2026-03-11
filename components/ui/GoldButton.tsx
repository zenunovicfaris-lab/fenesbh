"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  href?: string;
}

export default function GoldButton({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  href,
}: GoldButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-brand-gold text-brand-black border-2 border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white/10",
    dark: "bg-brand-black text-brand-gold border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-black",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
