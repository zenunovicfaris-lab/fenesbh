"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const galleryImages = [
  {
    src: "https://fenesbh.com/wp-content/uploads/2021/06/ELTF5391-1024x768.jpg",
    alt: "FENES BH realizacija 1",
  },
  {
    src: "https://fenesbh.com/wp-content/uploads/2021/11/239466940_288081176455349_6983096354351469794_n.jpg",
    alt: "FENES BH realizacija 2",
  },
  {
    src: "https://fenesbh.com/wp-content/uploads/2021/11/243154773_309992570930876_3868037677121734654_n.jpg",
    alt: "FENES BH realizacija 3",
  },
  {
    src: "https://fenesbh.com/wp-content/uploads/2021/11/243161828_309995524263914_68131331599103786_n.jpg",
    alt: "FENES BH realizacija 4",
  },
  {
    src: "https://fenesbh.com/wp-content/uploads/2021/11/243339353_309996047597195_5849050997923117656_n.jpg",
    alt: "FENES BH realizacija 5",
  },
  {
    src: "https://fenesbh.com/wp-content/uploads/2021/11/244047506_313085650621568_5040571581725131190_n.jpg",
    alt: "FENES BH realizacija 6",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : 0
    );

  return (
    <section id="galerija" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="NAŠI RADOVI" title="Pogledajte Naše Realizacije" />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full" style={{ paddingBottom: i % 3 === 1 ? "130%" : "75%" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            <button
              className="absolute top-6 right-6 z-10 p-2 text-white hover:text-brand-gold transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 md:left-8 z-10 p-3 text-white hover:text-brand-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              className="relative z-10 max-w-5xl max-h-[85vh] w-full mx-16"
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[85vh]">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="text-center text-white/50 text-sm mt-4">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 z-10 p-3 text-white hover:text-brand-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
