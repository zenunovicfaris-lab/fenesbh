"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "POČETNA", href: "/" },
  { label: "STOLARIJA", href: "/#proizvodi" },
  { label: "OGRADE", href: "/#proizvodi" },
  { label: "SISTEMI", href: "/#proizvodi" },
  { label: "PROIZVODI", href: "/#proizvodi" },
  { label: "KONTAKT", href: "/#kontakt" },
];

function NavInner({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* Logo sa animacijom */}
        <a href="/" className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src="/images/logo/fenes-logo.png"
              alt="FENES BH d.o.o. logo"
              width={220}
              height={70}
              className="object-contain h-12 w-auto lg:h-14"
              priority
            />
          </motion.div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative text-xs font-semibold tracking-widest text-brand-black/70 hover:text-brand-gold transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <motion.a
            href="/#kontakt"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: navLinks.length * 0.07 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 px-6 py-3 bg-brand-black text-white text-xs font-semibold tracking-widest uppercase border border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            ZATRAŽITE PONUDU
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="lg:hidden p-2 text-brand-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-brand-gold/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="text-sm font-semibold tracking-widest text-brand-black/70 hover:text-brand-gold transition-colors duration-200 py-3 border-b border-brand-lightgray"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="/#kontakt"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                className="mt-3 px-6 py-3 bg-brand-black text-white text-xs font-semibold tracking-widest uppercase text-center border border-brand-gold"
              >
                ZATRAŽITE PONUDU
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 lg:h-24 bg-white/95 backdrop-blur-md border-b border-brand-lightgray"
      style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
    >
      <NavInner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}
