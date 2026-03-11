"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedCounter from "./ui/AnimatedCounter";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center "
      id="pocetna"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-house.jpg')",
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div
        className="relative z-20 w-full pt-[300px]"
        style={{ paddingLeft: "8%" }}
      >
        <motion.div
          className="max-w-[60%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Gold line */}
          <motion.div
            className="h-[3px] bg-brand-gold mb-8 origin-left hidden md:block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ width: "60px" }}
          />

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-bold leading-[1.1] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
            }}
          >
            Vaš Dom Zaslužuje
            <br />
            Savršenu Stolariju
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed"
          >
            Premium ALU i PVC stolarija, ograde i stakleni balkoni. Isporuka i
            ugradnja diljem BiH i EU.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-black text-sm font-bold tracking-widest uppercase hover:bg-brand-gold-dark transition-all duration-300 hover:scale-105"
            >
              ZATRAŽITE PONUDU
            </a>
            <a
              href="#proizvodi"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white text-sm font-bold tracking-widest uppercase border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              POGLEDAJTE PROIZVODE
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-10">
            {[
              {
                value: 15,
                suffix: "+",
                label: "Godina iskustva",
              },
              {
                value: 500,
                suffix: "+",
                label: "Zadovoljnih klijenata",
              },
              {
                value: null,
                label: "EU Isporuka i montaža",
                icon: true,
              },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-brand-gold text-3xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value !== null ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    "EU"
                  )}
                </span>
                <span className="text-white/60 text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="text-brand-gold" size={24} />
      </motion.div>
    </section>
  );
}
