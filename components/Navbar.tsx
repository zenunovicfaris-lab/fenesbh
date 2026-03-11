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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/fenes-logo.png"
            alt="FENES BH d.o.o. logo"
            width={220}
            height={70}
            className="object-contain h-14 w-auto lg:h-16"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-xs font-semibold tracking-widest text-brand-black/70 hover:text-brand-gold transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/#kontakt"
            className="ml-4 px-6 py-3 bg-brand-black text-white text-xs font-semibold tracking-widest uppercase border border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            ZATRAŽITE PONUDU
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-brand-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-brand-gold/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold tracking-widest text-brand-black/70 hover:text-brand-gold transition-colors duration-200 py-2 border-b border-brand-lightgray"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-brand-black text-white text-xs font-semibold tracking-widest uppercase text-center border border-brand-gold"
              >
                ZATRAŽITE PONUDU
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/*
       * Relative nav — uvijek u document flow-u kako bi hero bio ispod.
       * Kada je scrolled=true postaje invisible ali i dalje zauzima prostor
       * (sprječava layout jump kada fixed nav slide-uje unutra).
       */}
      <nav
        className={`relative z-50 backdrop-blur-xl bg-white/80 border-b border-brand-gold/20 transition-opacity duration-200 ${
          scrolled ? "invisible" : "visible"
        }`}
      >
        <NavInner menuOpen={!scrolled && menuOpen} setMenuOpen={setMenuOpen} />
      </nav>

      {/*
       * Fixed nav — slide-uje se odozgo kada korisnik počne skrolati,
       * slide-uje se gore kada se vrati na vrh.
       */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            key="fixed-nav"
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-brand-gold/20 shadow-lg shadow-black/10"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <NavInner menuOpen={scrolled && menuOpen} setMenuOpen={setMenuOpen} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
