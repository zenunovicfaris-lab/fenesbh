"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

export default function VideoSection() {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="KAKO RADIMO"
          title="Pogledajte Naš Luksuzni Klizni Sistem u Akciji"
        />

        <motion.p
          className="text-center text-gray-500 text-base max-w-2xl mx-auto -mt-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Naši stručnjaci instaliraju premium sisteme sa preciznošću i pažnjom
          prema detaljima.
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-brand-gold"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/h6w1pUh3FKg?rel=0&modestbranding=1"
              title="FENES BH - Luksuzni Klizni Sistem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
