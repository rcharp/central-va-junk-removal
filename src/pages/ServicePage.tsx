import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import useSEO from "@/hooks/useSEO";
import { useParams, Link } from "react-router-dom";
import { SERVICES, BUSINESS } from "@/config/business";
import { featureMap } from "@/components/ServicesSection";
import { Check } from "lucide-react";

import residential from "@/assets/stock/service-residential.jpg";
import commercial from "@/assets/stock/service-commercial.jpg";
import construction from "@/assets/stock/service-construction.jpg";
import furniture from "@/assets/stock/service-furniture.jpg";
import appliance from "@/assets/stock/service-appliance.jpg";
import mattress from "@/assets/stock/service-mattress.jpg";
import trash from "@/assets/stock/service-trash.jpg";
import estate from "@/assets/stock/service-estate.jpg";
import realtor from "@/assets/stock/service-realtor.jpg";
import foreclosure from "@/assets/stock/service-foreclosure.jpg";
import property from "@/assets/stock/service-property.jpg";
import eviction from "@/assets/stock/service-eviction.jpg";

const imgMap: Record<string, string> = {
  "residential-clean-outs": residential,
  "commercial-clean-outs": commercial,
  "construction-cleanup": construction,
  "furniture-removal": furniture,
  "appliance-removal": appliance,
  "mattress-removal": mattress,
  "trash-removal": trash,
  "estate-clean-outs": estate,
  "realtor-clean-outs": realtor,
  "foreclosure-clean-outs": foreclosure,
  "property-manager-clean-outs": property,
  "eviction-clean-outs": eviction,
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  useSEO({
    title: service ? `${service.title} in Fredericksburg, VA | ${BUSINESS.name}` : "Service Not Found",
    description: service
      ? `${service.title} by ${BUSINESS.name}. ${service.short} Serving ${BUSINESS.region}. Call ${BUSINESS.phone}.`
      : "",
    canonical: `https://centralvahauling.com/services/${slug}`,
  });

  if (!service) {
    return (
      <PageShell>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-secondary underline">Return home</Link>
        </div>
      </PageShell>
    );
  }

  const features = featureMap[service.slug] ?? [];
  const image = imgMap[service.slug];

  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        subtitle={`${service.short} Serving ${BUSINESS.region} with fast, friendly, fully insured service.`}
        image={image}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {BUSINESS.name} provides professional {service.title.toLowerCase()} throughout
                Fredericksburg, Spotsylvania County, and Stafford County, VA. Whether you're
                clearing a single room or an entire property, our crew handles all the heavy
                lifting, loading, and responsible disposal — so you don't have to lift a finger.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">What's Included</h2>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Process</h2>
              <ol className="space-y-4 list-decimal pl-6 text-muted-foreground leading-relaxed">
                <li><strong className="text-foreground">Free Quote.</strong> Call or submit our form — we'll give an upfront, no-pressure estimate.</li>
                <li><strong className="text-foreground">Schedule.</strong> Pick a time that works for you. Same-day pickup is often available.</li>
                <li><strong className="text-foreground">We Haul.</strong> Our team loads, sweeps up, and hauls everything away.</li>
                <li><strong className="text-foreground">Responsible Disposal.</strong> We donate and recycle whenever possible.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Why Choose {BUSINESS.shortName}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fully licensed and insured, locally owned, and trusted by homeowners, property
                managers, realtors, and contractors across {BUSINESS.region}. We show up on time,
                quote fairly, and leave your property cleaner than we found it.
              </p>
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

export default ServicePage;
