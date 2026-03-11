"use client";

import { motion } from "framer-motion";
import { Shield, Tag, Truck, BadgeCheck } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const features = [
  {
    icon: Shield,
    title: "Profesionalnost",
    description:
      "Stručno i profesionalno osoblje, poštivanje ugovora i dogovorenih rokova.",
  },
  {
    icon: Tag,
    title: "Najpovoljnije Cijene",
    description:
      "Najpovoljnija cijena i najveći izbor profila i ograda u regionu vrhunske kvalitete.",
  },
  {
    icon: Truck,
    title: "Prevoz i Montaža",
    description:
      "Dugogodišnje iskustvo u montaži i transportu, dostava na vrijeme po preporuci proizvođača.",
  },
  {
    icon: BadgeCheck,
    title: "Garancija",
    description:
      "Podrška tokom garantnog perioda i nakon njega na sve proizvode i usluge.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="NAŠE PREDNOSTI"
          title="Zašto Odabrati FENES BH?"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                className="group bg-brand-darkgray border border-brand-midgray rounded-lg p-8 hover:border-brand-gold/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon className="text-brand-gold" size={28} />
                </div>
                <h3
                  className="text-white text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
