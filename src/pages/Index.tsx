import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";

const Index = () => {
  useSEO({
    title: `${BUSINESS.name} | Junk Removal in Fredericksburg, VA`,
    description: `Professional junk removal & cleanouts in Fredericksburg, Spotsylvania & Stafford County, VA. Residential, commercial, estate, foreclosure & construction. Call ${BUSINESS.phone}.`,
    canonical: "https://centralvahauling.com/",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <SpecialOffers />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
