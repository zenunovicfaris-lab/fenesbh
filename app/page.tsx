import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const PartnersSection = dynamic(() => import("@/components/PartnersSection"), {
  ssr: false,
});

const VideoSection = dynamic(() => import("@/components/VideoSection"), {
  ssr: false,
});

const MapSection = dynamic(() => import("@/components/MapSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <PartnersSection />
        <ProductsSection />
        <WhyUsSection />
        <VideoSection />
        <GallerySection />
        <ContactSection />
        <MapSection />
        <Footer />
      </main>
    </>
  );
}
