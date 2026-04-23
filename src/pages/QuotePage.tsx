import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import useSEO from "@/hooks/useSEO";
import { BUSINESS } from "@/config/business";

const QuotePage = () => {
  useSEO({
    title: `Get a Free Quote | ${BUSINESS.name}`,
    description: `Request a free junk removal quote from ${BUSINESS.name} in Fredericksburg, VA.`,
    canonical: "https://centralvahauling.com/quote",
  });
  return (
    <PageShell>
      <PageHero eyebrow="Free Quote" title="Get Your Free Junk Removal Quote" subtitle="Tell us what needs to go and we'll get back to you fast." />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <QuoteForm showHeader={false} />
        </div>
      </section>
    </PageShell>
  );
};
export default QuotePage;
