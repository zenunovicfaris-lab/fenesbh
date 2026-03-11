"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-brand-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0 rounded-xl overflow-hidden shadow-2xl">
          {/* Left – Map */}
          <div className="w-full h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45763.48665053424!2d18.614666491176223!3d44.44434237599015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475eb5b2b2b1b5b5%3A0x400f3953bf59380!2s%C5%BDivinice%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sba!4v1700000000000!5m2!1sen!2sba"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                filter: "grayscale(20%) contrast(1.1)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FENES BH lokacija – Živinice"
            />
          </div>

          {/* Right – Info */}
          <motion.div
            className="bg-brand-darkgray p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              GDJE NAS NAĆI
            </p>
            <h3
              className="text-white text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              FENES BH d.o.o. Živinice
            </h3>

            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                    Adresa
                  </p>
                  <p className="text-white text-sm">
                    Druga Ulica br.21, Živinice 75270, BiH
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                    Radno Vrijeme
                  </p>
                  <p className="text-white text-sm">
                    Pon–Pet: 08:00–16:00
                  </p>
                  <p className="text-white text-sm">Sub: 08:00–13:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-brand-gold flex-shrink-0" size={18} />
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                    Telefon
                  </p>
                  <a
                    href="tel:+38762171851"
                    className="text-white text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    +387 62 171 851
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-brand-gold flex-shrink-0" size={18} />
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:fenesbh@gmail.com"
                    className="text-white text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    fenesbh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/Živinice+75270+Bosnia+and+Herzegovina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-black text-brand-gold text-xs font-bold tracking-widest uppercase border border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
            >
              <MapPin size={14} />
              OTVORI U GOOGLE MAPS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
