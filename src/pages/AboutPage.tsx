import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";

const AboutPage = () => {
  useSEO({
    title: `About ${BUSINESS.name} | Owner ${BUSINESS.owner}`,
    description: `Learn about ${BUSINESS.name}, a locally owned junk removal company in Fredericksburg, VA, led by owner ${BUSINESS.owner}.`,
    canonical: "https://centralvahauling.com/about",
  });
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title={`Meet ${BUSINESS.name}`}
        subtitle={`Locally owned and operated by ${BUSINESS.owner}, serving ${BUSINESS.region} with professional, dependable junk removal.`}
      />
      <TrustBadges />
      <AboutSection />
      <CTASection />
    </PageShell>
  );
};
export default AboutPage;
