import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";
import Navbar from "@/components/Navbar";
import ProductContactForm from "@/components/ui/ProductContactForm";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords.join(", "),
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      images: [{ url: product.image }],
      type: "article",
    },
    alternates: {
      canonical: `https://fenesbh.com/proizvodi/${params.slug}`,
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "FENES BH d.o.o." },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BAM",
      seller: {
        "@type": "LocalBusiness",
        name: "FENES BH d.o.o.",
        address: "Druga Ulica br.21, Živinice 75270",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Početna",
        item: "https://fenesbh.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Naši Proizvodi",
        item: "https://fenesbh.com/#proizvodi",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `https://fenesbh.com/proizvodi/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      {/* Breadcrumb bar */}
      <div className="bg-brand-offwhite border-b border-brand-lightgray pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Početna
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/#proizvodi"
              className="hover:text-brand-gold transition-colors"
            >
              Naši Proizvodi
            </Link>
            <ChevronRight size={12} />
            <span className="text-brand-black font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${product.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 text-center px-6">
          <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
            {product.category}
          </p>
          <h1
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            {product.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 items-start">
            {/* Left – content */}
            <div>
              <h2
                className="text-brand-black text-3xl font-bold mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                O Proizvodu
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                {product.longDescription}
              </p>

              {/* Features */}
              <h3
                className="text-brand-black text-2xl font-bold mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Karakteristike i Prednosti
              </h3>
              <ul className="flex flex-col gap-3 mb-12">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-brand-gold mt-0.5 flex-shrink-0"
                      size={18}
                    />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Specification groups */}
              {product.specifications.map((group, gi) => (
                <div key={gi} className="mb-10">
                  <h3
                    className="text-brand-black text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {group.title}
                  </h3>
                  <div className="h-[2px] w-12 bg-brand-gold mb-5" />
                  <div className="overflow-hidden rounded-lg border border-brand-lightgray">
                    {group.items.map((item, ii) => (
                      <div
                        key={ii}
                        className={`grid grid-cols-2 text-sm ${
                          ii % 2 === 0
                            ? "bg-brand-offwhite"
                            : "bg-white"
                        }`}
                      >
                        <div className="px-5 py-3 text-gray-500 font-medium border-r border-brand-lightgray">
                          {item.label}
                        </div>
                        <div className="px-5 py-3 text-brand-black font-semibold">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right – sticky sidebar */}
            <div className="lg:sticky lg:top-28">
              <ProductContactForm productTitle={product.title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
