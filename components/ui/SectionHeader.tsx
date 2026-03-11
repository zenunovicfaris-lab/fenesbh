"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  light = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
        {eyebrow}
      </p>
      <h2
        className={`font-playfair text-4xl md:text-5xl font-bold leading-tight mb-5 ${
          light ? "text-white" : "text-brand-black"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      <div
        className={`h-[2px] w-16 bg-brand-gold ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
