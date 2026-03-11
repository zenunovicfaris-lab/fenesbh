"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Send } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ProductContactForm({
  productTitle,
}: {
  productTitle: string;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: `Zanima me ponuda za: ${productTitle}`,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Ime je obavezno";
    if (!form.phone.trim()) e.phone = "Telefon je obavezan";
    if (form.message.trim().length < 5) e.message = "Unesite poruku";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const fieldCls = (field: keyof FormErrors) =>
    `w-full px-3 py-2.5 border text-sm bg-white text-brand-black placeholder-gray-400 outline-none transition-colors duration-200 focus:border-brand-gold ${
      errors[field] ? "border-brand-gold" : "border-brand-lightgray"
    }`;

  return (
    <div className="bg-white rounded-xl shadow-2xl border-t-4 border-brand-gold p-6">
      <h3
        className="text-brand-black text-xl font-bold mb-1"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Zatražite Ponudu
      </h3>
      <p className="text-gray-400 text-xs mb-5">
        Besplatna procjena u roku od 24h
      </p>

      {submitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Send className="text-brand-gold" size={20} />
          </div>
          <p className="text-brand-black font-semibold text-sm mb-1">
            Upit primljen!
          </p>
          <p className="text-gray-400 text-xs">
            Javit ćemo se u najkraćem roku.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Vaše ime *"
              className={fieldCls("name")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-brand-gold text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Telefon *"
              className={fieldCls("phone")}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && (
              <p className="text-brand-gold text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Poruka *"
              className={`${fieldCls("message")} resize-none`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && (
              <p className="text-brand-gold text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-brand-black text-brand-gold text-xs font-bold tracking-widest uppercase border border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            POŠALJI UPIT
          </button>
        </form>
      )}

      <div className="border-t border-brand-lightgray mt-5 pt-5 flex flex-col gap-2">
        <a
          href="tel:+38762171851"
          className="text-brand-black text-sm hover:text-brand-gold transition-colors duration-200 font-medium"
        >
          +387 62 171 851
        </a>
        <a
          href="mailto:fenesbh@gmail.com"
          className="text-gray-400 text-xs hover:text-brand-gold transition-colors duration-200"
        >
          fenesbh@gmail.com
        </a>
      </div>

      <div className="mt-5">
        <Link
          href="/#proizvodi"
          className="inline-flex items-center gap-1.5 text-brand-gold text-xs font-semibold hover:gap-2.5 transition-all duration-200"
        >
          <ChevronLeft size={14} />
          Nazad na sve proizvode
        </Link>
      </div>
    </div>
  );
}
