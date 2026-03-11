"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const partners = [
  {
    src: encodeURI("/images/PVC Profili logos/aluplast.png"),
    alt: "Aluplast - Premium PVC sistemi",
    category: "PVC Profili",
  },
  {
    src: encodeURI("/images/PVC Profili logos/baufens.png"),
    alt: "Baufens - Višekomorne PVC profile",
    category: "PVC Profili",
  },
  {
    src: encodeURI("/images/Stakleni sistemi logos/bks-systems.png"),
    alt: "BKS Systems - Stakleni balkoni",
    category: "Stakleni sistemi",
  },
  {
    src: encodeURI("/images/Okovi i mehanizmi logos/roto.png"),
    alt: "Roto - Sigurnosni mehanizmi",
    category: "Okovi",
  },
  {
    src: encodeURI("/images/Okovi i mehanizmi logos/winkhaus.png"),
    alt: "Winkhaus - Okovi i mehanizmi",
    category: "Okovi",
  },
];

function PartnerLogo({
  src,
  alt,
  category,
  index,
}: {
  src: string;
  alt: string;
  category: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          maxHeight: "48px",
          maxWidth: "140px",
          objectFit: "contain",
          filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
          opacity: hovered ? 1 : 0.6,
          transition: "filter 0.3s ease, opacity 0.3s ease",
        }}
      />
      {hovered && (
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-brand-black text-brand-gold text-[10px] font-semibold tracking-wider px-3 py-1 rounded whitespace-nowrap z-10">
          {category}
        </div>
      )}
    </motion.div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 border-b border-brand-lightgray">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-10">
          RADIMO SA VODEĆIM EUROPSKIM BRENDOVIMA
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap pb-6">
          {partners.map((partner, i) => (
            <PartnerLogo
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              category={partner.category}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
