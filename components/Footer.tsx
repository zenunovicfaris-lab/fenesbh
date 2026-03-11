import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Početna", href: "#" },
  { label: "Proizvodi", href: "#proizvodi" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Zatražite ponudu", href: "#kontakt" },
];

const categories = [
  "ALU Stolarija",
  "PVC Stolarija",
  "Stakleni Balkoni",
  "Ograde",
  "Garažna Vrata",
  "Klizni Sistemi",
  "ALU Roletne",
  "Komarnici",
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & tagline */}
          <div>
            <div className="mb-5">
              <Image
                src="/images/logo/fenes-logo.png"
                alt="FENES BH d.o.o. logo"
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Premium ALU i PVC stolarija, ograde i sistemi staklenih balkona.
              Vaš partner za savršenu stolariju od 2009. godine.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/fenesbh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-brand-midgray flex items-center justify-center text-white/40 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/fenesbh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-brand-midgray flex items-center justify-center text-white/40 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Brzi Linkovi
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Kategorije
            </h4>
            <ul className="flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#proizvodi"
                    className="text-white/40 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold mt-0.5 flex-shrink-0" size={16} />
                <span className="text-white/40 text-sm">
                  Druga Ulica br.21,
                  <br />
                  Živinice 75270, BiH
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold flex-shrink-0" size={16} />
                <a
                  href="tel:+38762171851"
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  +387 62 171 851
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold flex-shrink-0" size={16} />
                <a
                  href="tel:+38762387945"
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  +387 62 387 945
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold flex-shrink-0" size={16} />
                <a
                  href="mailto:fenesbh@gmail.com"
                  className="text-white/40 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  fenesbh@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 FENES BH D.O.O. Živinice. Sva prava zadržana.
          </p>
          <p className="text-white/20 text-xs">
            ALU i PVC Stolarija | Ograde | Stakleni Balkoni
          </p>
        </div>
      </div>
    </footer>
  );
}
