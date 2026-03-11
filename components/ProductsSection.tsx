"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const products = [
  {
    slug: "luksuzni-klizni-sistem",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/Izrezak.png",
    category: "Klizni Sistemi",
    title: "Luksuzni Klizni Sistem",
    description:
      "Elegantni klizni sistemi bez praga za maksimalnu funkcionalnost i estetiku. Idealno rješenje za moderne stambene i poslovne prostore.",
  },
  {
    slug: "stakleni-balkoni-rukohvati",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/Izrezak1.png",
    category: "Stakleni Balkoni",
    title: "Stakleni Balkoni s Rukohvatima",
    description:
      "Sigurni stakleni balkoni opremljeni čeličnim rukohvatima visoke kvalitete. Kombinacija sigurnosti i modernog dizajna.",
  },
  {
    slug: "balkoni-izolaciono-staklo",
    image:
      "https://fenesbh.com/wp-content/uploads/2021/07/KLIZNI-SISTEM-S-PRAGOM.png",
    category: "Stakleni Balkoni",
    title: "Balkoni s Izolacionim Staklom",
    description:
      "Stakleni balkoni s kliznim sistemom i termički izolacionim staklom. Štite od buke i osiguravaju odlične termičke karakteristike.",
  },
  {
    slug: "komarnici-za-prozore",
    image:
      "https://fenesbh.com/wp-content/uploads/2022/02/Komarnici-za-prozore_slika_O_71410897.jpg",
    category: "Komarnici",
    title: "Komarnici za Prozore",
    description:
      "Kvalitetni komarnici za sve tipove prozora i vrata. Efikasna zaštita od insekata uz nesmetano prozračivanje prostora.",
  },
  {
    slug: "garazna-vrata",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/POCETNA-SLIKA.jpg",
    category: "Garažna Vrata",
    title: "Garažna Vrata",
    description:
      "Moderna sekcijska garažna vrata s automatskim pogonom visokog kvaliteta. Pouzdana i sigurna rješenja za svaki prostor.",
  },
  {
    slug: "alu-roletne",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/featuredimage.jpg",
    category: "ALU Roletne",
    title: "ALU Roletne",
    description:
      "Aluminijske roletne za maksimalnu zaštitu od sunca i toplote. Dostupne u raznim bojama i dimenzijama po mjeri.",
  },
];

export default function ProductsSection() {
  return (
    <section id="proizvodi" className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="ŠTA NUDIMO" title="Naši Proizvodi i Sistemi" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              className="group bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="h-full flex flex-col group-hover:border-b-[3px] group-hover:border-brand-gold transition-all duration-300">
                {/* Image */}
                <Link
                  href={`/proizvodi/${product.slug}`}
                  className="block relative h-56 overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                    {product.category}
                  </p>
                  <h3
                    className="text-brand-black text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {product.description}
                  </p>
                  <Link
                    href={`/proizvodi/${product.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold tracking-wide group-hover:gap-3 transition-all duration-200"
                  >
                    Saznaj više
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
