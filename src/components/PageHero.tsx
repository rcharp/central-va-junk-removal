import { ReactNode } from "react";
import { Phone } from "lucide-react";
import { useQuoteModal } from "@/components/QuoteModal";
import { BUSINESS } from "@/config/business";
import defaultPageHeroBg from "@/assets/stock/page-hero-bg.jpg";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, image, children }: PageHeroProps) => {
  const { openQuoteModal } = useQuoteModal();
  const bg = image ?? defaultPageHeroBg;
  return (
    <section className="relative -mt-[120px] lg:-mt-[180px] pt-[160px] lg:pt-[240px] pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center text-white max-w-4xl">
        {eyebrow && (
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">{eyebrow}</span>
        )}
        <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight mt-4">{title}</h1>
        {subtitle && <p className="text-lg lg:text-xl text-white/80 mt-6 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" /> {BUSINESS.phone}
          </a>
          <button
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
