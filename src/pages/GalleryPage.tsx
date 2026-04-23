import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";

const GalleryPage = () => {
  useSEO({
    title: `Gallery | ${BUSINESS.name}`,
    description: `Photos of recent junk removal and cleanout jobs by ${BUSINESS.name} across ${BUSINESS.region}.`,
    canonical: "https://centralvahauling.com/gallery",
  });
  return (
    <PageShell>
      <PageHero eyebrow="Gallery" title="See Our Recent Work" subtitle="A look at residential, commercial, and construction cleanouts across Central Virginia." />
      <GallerySection />
      <CTASection />
    </PageShell>
  );
};
export default GalleryPage;
