"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Smartphone, Mail, Globe } from "lucide-react";
const contactInfo = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Druga Ulica br.21, Živinice 75270",
    href: "https://maps.google.com/?q=Živinice+75270+BiH",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+387 62 171 851",
    href: "tel:+38762171851",
  },
  {
    icon: Smartphone,
    label: "Mobilni",
    value: "+387 62 387 945",
    href: "tel:+38762387945",
  },
  {
    icon: Mail,
    label: "Email",
    value: "fenesbh@gmail.com",
    href: "mailto:fenesbh@gmail.com",
  },
];

const productOptions = [
  "ALU Stolarija",
  "PVC Stolarija",
  "Stakleni Balkoni",
  "Ograde",
  "Garažna Vrata",
  "Klizni Sistemi",
  "ALU Roletne",
  "Komarnici",
  "Ostalo",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Ime je obavezno";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Unesite ispravnu email adresu";
    if (!formData.phone.trim()) e.phone = "Telefon je obavezan";
    if (!formData.product) e.product = "Odaberite vrstu proizvoda";
    if (formData.message.trim().length < 10)
      e.message = "Poruka mora imati najmanje 10 znakova";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const fieldClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 border text-sm bg-white text-brand-black placeholder-gray-400 outline-none transition-all duration-200 focus:border-brand-gold ${
      errors[field]
        ? "border-brand-gold"
        : "border-brand-lightgray"
    }`;

  return (
    <section id="kontakt" className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              KONTAKTIRAJTE NAS
            </p>
            <h2
              className="text-brand-black text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Zatražite Besplatnu Ponudu
            </h2>
            <div className="h-[2px] w-16 bg-brand-gold mb-8" />
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Kontaktirajte nas za besplatnu procjenu i ponudu. Naš tim stručnjaka
              je spreman da vam pomogne pronaći idealno rješenje za vaš dom ili
              poslovni prostor.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors duration-200">
                      <Icon className="text-brand-gold" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-brand-black font-semibold text-sm group-hover:text-brand-gold transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* EU Badge */}
            <div className="flex items-center gap-3 p-4 border border-brand-gold/30 bg-brand-gold/5 rounded-lg">
              <Globe className="text-brand-gold" size={24} />
              <p className="text-brand-black font-semibold text-sm">
                Isporuka i ugradnja diljem EU
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Mail className="text-brand-gold" size={32} />
                  </div>
                  <h3
                    className="text-brand-black text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Hvala na upitu!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Vaša poruka je primljena. Javit ćemo se u najkraćem mogućem
                    roku.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-gray-600 uppercase mb-2">
                      Ime i Prezime *
                    </label>
                    <input
                      type="text"
                      placeholder="Vaše ime i prezime"
                      className={fieldClass("name")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-brand-gold text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-gray-600 uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="vasa@email.com"
                        className={fieldClass("email")}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-brand-gold text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-gray-600 uppercase mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        placeholder="+387 xx xxx xxx"
                        className={fieldClass("phone")}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                      {errors.phone && (
                        <p className="text-brand-gold text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-gray-600 uppercase mb-2">
                      Vrsta Proizvoda *
                    </label>
                    <select
                      className={`${fieldClass("product")} cursor-pointer`}
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                    >
                      <option value="">Odaberite vrstu proizvoda</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.product && (
                      <p className="text-brand-gold text-xs mt-1">{errors.product}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-gray-600 uppercase mb-2">
                      Poruka *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Opišite vaš zahtjev..."
                      className={`${fieldClass("message")} resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    {errors.message && (
                      <p className="text-brand-gold text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-black text-brand-gold text-sm font-bold tracking-widest uppercase border border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 mt-2"
                  >
                    POŠALJI UPIT
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
