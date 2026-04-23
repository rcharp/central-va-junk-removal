import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import useSEO from "@/hooks/useSEO";
import { useParams, Link } from "react-router-dom";
import { BUSINESS, SERVICES } from "@/config/business";
import fredericksburg from "@/assets/stock/area-fredericksburg.jpg";
import spotsylvania from "@/assets/stock/area-spotsylvania.jpg";
import stafford from "@/assets/stock/area-stafford.jpg";

type AreaInfo = {
  name: string;
  image: string;
  blurb: string;
  landmarks: string[];
  trust: string;
};

const AREA_INFO: Record<string, AreaInfo> = {
  "fredericksburg-va": {
    name: "Fredericksburg, VA",
    image: fredericksburg,
    blurb:
      "From historic downtown to the neighborhoods around Central Park and Cosner's Corner, we provide same-day junk removal and cleanouts throughout Fredericksburg.",
    landmarks: [
      "Historic Downtown Fredericksburg",
      "Central Park & Spotsylvania Towne Centre",
      "Mary Washington University area",
      "Cosner's Corner & Massaponax",
    ],
    trust: "Locally based out of Fredericksburg — we're often just minutes from your door.",
  },
  "spotsylvania-county-va": {
    name: "Spotsylvania County, VA",
    image: spotsylvania,
    blurb:
      "We serve homeowners, property managers, and contractors across Spotsylvania County — from Lake Anna to the I-95 corridor.",
    landmarks: [
      "Lake Anna communities",
      "Spotsylvania Courthouse area",
      "Salem Fields & Lee's Hill",
      "I-95 / Route 1 corridor",
    ],
    trust: "Quick response across all Spotsylvania zip codes, including new construction and HOA neighborhoods.",
  },
  "stafford-county-va": {
    name: "Stafford County, VA",
    image: stafford,
    blurb:
      "Junk removal and cleanouts throughout Stafford County — from Aquia and Garrisonville to Stafford Courthouse and beyond.",
    landmarks: [
      "Aquia Harbour",
      "Garrisonville & North Stafford",
      "Stafford Courthouse",
      "Brooke & Widewater",
    ],
    trust: "Trusted by Stafford-area realtors, military families, and property managers for fast turnover service.",
  },
};

const ServiceAreaPage = () => {
  const { slug } = useParams();
  const area = slug ? AREA_INFO[slug] : undefined;

  useSEO({
    title: area ? `Junk Removal in ${area.name} | ${BUSINESS.name}` : "Service Area Not Found",
    description: area
      ? `${BUSINESS.name} provides junk removal, cleanouts, and debris hauling in ${area.name}. Licensed & insured. Call ${BUSINESS.phone}.`
      : "",
    canonical: `https://centralvahauling.com/service-areas/${slug}`,
  });

  if (!area) {
    return (
      <PageShell>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service area not found</h1>
          <Link to="/" className="text-secondary underline">Return home</Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Service Area"
        title={`Junk Removal in ${area.name}`}
        subtitle={area.blurb}
        image={area.image}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Serving {area.name} & Surrounding Neighborhoods</h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                {area.landmarks.map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Services Offered in {area.name}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block p-4 rounded-xl border border-border bg-card hover:border-secondary transition-colors"
                  >
                    <div className="font-semibold text-foreground">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Why Locals Choose Us</h2>
              <p className="text-muted-foreground leading-relaxed">{area.trust}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <QuoteForm compact />
          </aside>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
};

export default ServiceAreaPage;
